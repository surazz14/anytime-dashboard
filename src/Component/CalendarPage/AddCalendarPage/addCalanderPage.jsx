import React from "react";
import { Row, Col, Form, notification } from "antd";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import Buttons from "../../Common/Ui/Button/button";
import { addCalendarPage } from "../../../Store/Action/calendarPage";
import { Field, FieldArray, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import Validators from "../../../Utils/utils";

const { required } = Validators;
const FORM_NAME = "add_calendar_page_data";

const renderSymptoms = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      <Buttons type="primary" onClick={() => fields.push()}>
        Add Symptoms
      </Buttons>
      {submitFailed && error && (
        <span style={{ color: "red" }}>
          <br />
          {error}
        </span>
      )}
    </div>
    <br />
    {fields.map((member, index) => (
      <div key={index}>
        <Buttons type="danger" onClick={() => fields.remove(index)}>
          delete
        </Buttons>
        <h4>Key #{index + 1}</h4>

        <Label label="Symptoms" />
        <Row>
          <Col>
            <Field
              name={`${member}.symptoms`}
              type="text"
              validate={required}
              component={InputField}
            />
          </Col>
        </Row>
        <br />
      </div>
    ))}
  </div>
);

const renderDisorders = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      <Buttons type="primary" onClick={() => fields.push([])}>
        Add Disorders
      </Buttons>
      {submitFailed && error && (
        <span style={{ color: "red" }}>
          <br />
          {error}
        </span>
      )}
    </div>
    <br />
    {fields.map((member, index) => (
      <div key={index}>
        <Buttons type="danger" onClick={() => fields.remove(index)}>
          delete
        </Buttons>
        <h4>Key #{index + 1}</h4>

        <Label label="Disorders" />
        <Row>
          <Col>
            <Field
              name={`${member}.disorders`}
              type="text"
              validate={required}
              component={InputField}
            />
          </Col>
        </Row>
        <br />
      </div>
    ))}
  </div>
);

function AddCalendarPage({ handleSubmit }) {
  const handleSubmits = event => {
    console.log(event, "this is event");
    const symptoms = event.symptoms.map(data => data.symptoms);
    const disorders = event.disorders.map(data => data.disorders);
    notification.success({
      message: "AnyTime",
      description: "calendar data is added successfully"
    });
  };
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Add Calendar Page Data</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(handleSubmits)}>
        <Row>
          <Col>
            <FieldArray
              name="symptoms"
              validate={required}
              component={renderSymptoms}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <FieldArray
              name="disorders"
              validate={required}
              component={renderDisorders}
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
            Add Calendar Page Data
          </Buttons>
        </Row>
      </Form>

      <br />
    </React.Fragment>
  );
}

export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(null, { addCalendarPage })
)(AddCalendarPage);
