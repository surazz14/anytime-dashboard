import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import Buttons from "../../Common/Ui/Button/button";
import { Field, FieldArray, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

const FORM_NAME = "update_calendar_page_data";

function UpdateCalendarPage({ handleSubmit }) {
  const [state, setState] = useState({
    stateSymptoms: false,
    stateDisorders: false
  });

  const onClick = (defaultValue, fields) => {
    console.log(defaultValue, fields.name, "this is default value");
    defaultValue.map(data => fields.push(data));
    fields.name === "disorders"
      ? setState({ ...state, stateDisorders: true })
      : setState({ ...state, stateSymptoms: true });
  };
  const renderSymptoms = ({
    fields,
    defaultValue,
    meta: { error, submitFailed }
  }) => (
    <div>
      <div>
        {console.log(defaultValue, "this is default value 1")}
        <Buttons
          type="primary"
          disabled={state.stateSymptoms}
          onClick={() => onClick(defaultValue, fields)}
        >
          Update Symptoms
        </Buttons>
        {submitFailed && error && <span>{error}</span>}
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
                component={InputField}
              />
            </Col>
          </Row>
          <br />
        </div>
      ))}
    </div>
  );

  const renderDisorders = ({
    fields,
    defaultValue,
    meta: { error, submitFailed }
  }) => (
    <div>
      <div>
        <Buttons
          type="primary"
          disabled={state.stateDisorders}
          onClick={() => onClick(defaultValue, fields)}
        >
          update Disorders
        </Buttons>
        {submitFailed && error && <span>{error}</span>}
      </div>
      <br />
      {fields.map((member, index) => (
        <div key={index}>
          <Buttons type="danger" onClick={() => fields.remove(index)}>
            delete
          </Buttons>
          <h4>Key #{index + 1}</h4>
          {console.log(member, "this is member")}
          <Label label="Disorders" />
          <Row>
            <Col>
              <Field
                name={`${member}.disorders`}
                type="text"
                component={InputField}
              />
            </Col>
          </Row>
          <br />
        </div>
      ))}
    </div>
  );
  const handleSubmits = event => {
    const symptoms = event.symptoms.map(data => data.symptoms);
    const disorders = event.disorders.map(data => data.disorders);
    notification.success({
      message: "AnyTime",
      description: "calendar data is updatedsuccessfully"
    });

    console.log(event, "this is event");
  };
  const data = [
    {
      symptoms: ["aaa", "bbb", "ccc"],
      disorders: ["aaa", "bbb", "ccc"]
    }
  ];
  const newSymptoms = [];
  data[0].symptoms.map(data => newSymptoms.push({ symptoms: data }));
  const newDisorders = [];
  data[0].symptoms.map(data => newDisorders.push({ disorders: data }));
  console.log(newSymptoms, "this is symtoms");
  console.log(data[0].symptoms);
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
              defaultValue={newSymptoms}
              component={renderSymptoms}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FieldArray
              name="disorders"
              defaultValue={newDisorders}
              component={renderDisorders}
            />
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="center">
          <Buttons type="primary" htmlType="submit">
            Update Calendar Page Data
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
  connect(null, {})
)(UpdateCalendarPage);
