import React, { useState } from "react";
import { Field, reduxForm, change } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import slugify from "react-slugify";
import { Form, Row, Col, notification } from "antd";

import Spinner from "../../Common/Ui/Spinner/spinner";
import { addArticle } from "../../../Store/Action/article";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Buttons from "../../Common/Ui/Button/button";
import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Validators from "../../../Utils/utils";

const FORM_NAME = "add_article";
const { required } = Validators;

function AddArticle({ handleSubmit, addArticle, dispatch, change }) {
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
    change(FORM_NAME, "image", fileList);
  };

  const onHandleSumbit = event => {
    console.log(event, "this is event");
    const slug = slugify(<span>article{event.title}</span>);
    event["slug"] = slug;
    setLoading(true);
    return new Promise((resolve, reject) => {
      addArticle(event, resolve, reject);
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
          description: err.response.data.error
        });
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onHandleSumbit)}>
        <h1 className={"title-header"}>Add Articles</h1>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="Title" />
              <Field name="title" validate={required} component={InputField} />
            </Col>
          </Row>

          <br />

          {/* <Row>
            <Col>
              <Label label="Article" />
              <Field
                rows={5}
                name="article"
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br /> */}
          <Row>
            <Col>
              <Label label="Image" />
              <br />
              <Field
                name="image"
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
              <Label label="Short Description" />
              <Field
                rows={5}
                name="shortDescription"
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Label label="Full Description" />
              <Field
                rows={5}
                name="fullDescription"
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Buttons
                block
                size="large"
                style={{ backgroundColor: "#5cb85c", borderColor: "#5cb85c" }}
                type="primary"
                htmlType="submit"
              >
                Add
              </Buttons>
            </Col>
          </Row>
        </Spinner>
      </Form>
    </React.Fragment>
  );
}

export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(null, { addArticle })
)(AddArticle);
