import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { addSlider } from "../../../Store/Action/slider";

import Validators from "../../../Utils/utils";
import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Buttons from "../../Common/Ui/Button/button";
import Spinner from "../../Common/Ui/Spinner/spinner";

const FORM_NAME = "add_slider";
const { required } = Validators;

function AddSlider({ handleSubmit, change, addSlider }) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    selectedFileList: null
  });

  const onChangefile = info => {
    let file;
    if (info.fileList.length > 1) {
      file = [info.fileList && info.fileList[info.fileList.length - 1]];
    } else {
      file = info.fileList;
    }
    const fileList = file.map(data => data.originFileObj);
    console.log(fileList, "this is file");
    setState({
      ...state,
      selectedFileList: fileList
    });
    console.log(fileList, "this is fileList");
    change(FORM_NAME, "image", fileList);
  };
  const onHandleSumbit = event => {
    console.log(event, "this is event");
    setLoading(true);
    return new Promise((resolve, reject) => {
      addSlider(event, resolve, reject);
    })
      .then(data => {
        setLoading(false);
        notification.success({
          message: "AnyTime",
          description: data.data.success
        });
      })
      .catch(err => {
        console.log(err, "this is error");
        setLoading(false);
        notification.error({
          message: "AnyTime",
          description: "error in adding slider"
        });
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Add Slider</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onHandleSumbit)}>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <h2>Images</h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <br />
              <Field
                name="image"
                validate={required}
                fileList={state.selectedFileList}
                onChange={onChangefile}
                component={FileUpload}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Buttons
              type="primary"
              style={{ backgroundColor: "#5cb85c", borderColor: "#5cb85c" }}
              htmlType="submit"
            >
              Add image
            </Buttons>
          </Row>
        </Spinner>
      </Form>

      <br />
    </React.Fragment>
  );
}

export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(null, { addSlider })
)(AddSlider);
