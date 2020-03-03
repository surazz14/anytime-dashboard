import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { addAbout } from "../../../Store/Action/about";

import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Buttons from "../../Common/Ui/Button/button";
import Validators from "../../../Utils/utils";
import Spinner from "../../Common/Ui/Spinner/spinner";

const FORM_NAME = "add_about";
const { required } = Validators;

function AddAbout({ handleSubmit, change, addAbout }) {
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
    console.log(file, "this is file");
    console.log(info, "this is fileList");
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
    setLoading(true);
    console.log(event, "this is event");
    return new Promise((resolve, reject) => {
      addAbout(event, resolve, reject);
    })
      .then(data => {
        console.log(data, "this is data");
        setLoading(false);
        notification.success({
          message: "AnyTime",
          description: data.data.success
        });
      })
      .catch(err => {
        console.log(err.data, "this is error");
        setLoading(false);
        notification.error({
          message: "AnyTime",
          description: err.response.data.error
        });
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Add About</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onHandleSumbit)}>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="image" />
              <br />
              <Field
                name="image"
                // multiple={true}
                fileList={state.selectedFileList}
                validate={required}
                onChange={onChangefile}
                component={FileUpload}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Label label="Description" />
              <Field
                name="Description"
                rows={5}
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row type="flex" justify="center">
            <Buttons
              type="primary"
              style={{ backgroundColor: "#5cb85c", borderColor: "#5cb85c" }}
              htmlType="submit"
            >
              Add About
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
  connect(null, { addAbout })
)(AddAbout);
