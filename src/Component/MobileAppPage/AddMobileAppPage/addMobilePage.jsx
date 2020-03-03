import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import { Field, FieldArray, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Buttons from "../../Common/Ui/Button/button";
import Spinner from "../../Common/Ui/Spinner/spinner";
import Validators from "../../../Utils/utils";

const FORM_NAME = "add_mobile_app_page";
const { required } = Validators;

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      <Buttons type="primary" onClick={() => fields.push({})}>
        Add
      </Buttons>
      {submitFailed && error && <span>{error}</span>}
    </div>
    <br />
    {fields.map((member, index) => (
      <div key={index}>
        <Buttons
          type="danger"
          validate={required}
          onClick={() => fields.remove(index)}
        >
          delete
        </Buttons>
        <h4>Key #{index + 1}</h4>

        <Label label="key" />
        <Row>
          <Col>
            <Field
              name={`${member}.key`}
              type="text"
              validate={required}
              component={InputField}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Label label="value" />

            <Field
              name={`${member}.value`}
              type="text"
              component={InputField}
              validate={required}
            />
          </Col>
        </Row>

        <br />
      </div>
    ))}
  </div>
);

function AddMobileAppPage({ handleSubmit }) {
  const [loading, setLoading] = useState(false);
  const handleSubmits = event => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    console.log(event, "this is event");
  };
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Add Mobile Page App</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(handleSubmits)}>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="Brief description" />
              <Field
                name="briefDescription"
                rows={5}
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Label label="How to use" />
              <Field
                name="howToUse"
                rows={5}
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h2>Features</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldArray
                name="feature"
                validate={required}
                component={renderMembers}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label label="Image" />
              <br />
              <Field
                name="fieldUpload"
                validate={required}
                component={FileUpload}
              />
            </Col>
          </Row>
          <br />
          <Row type="flex" justify="center">
            <Buttons
              type="primary"
              style={{ backgroundColor: "#5cb85c", borderColor: "#5cb85c" }}
              htmlType="submit"
            >
              Add Mobile App Page
            </Buttons>
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
  connect(null, {})
)(AddMobileAppPage);
