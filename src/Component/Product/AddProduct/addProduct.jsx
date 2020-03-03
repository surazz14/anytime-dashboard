import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import { Field, FieldArray, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import slugify from "react-slugify";

import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Buttons from "../../Common/Ui/Button/button";
import Validators from "../../../Utils/utils";
import Spinner from "../../Common/Ui/Spinner/spinner";
import { addProduct } from "../../../Store/Action/product";
const FORM_NAME = "add_product";
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
        <Buttons type="danger" onClick={() => fields.remove(index)}>
          delete
        </Buttons>
        <h4>Key #{index + 1}</h4>

        <Label label="key" />
        <Row>
          <Col>
            <Field
              name={`${member}.key`}
              validate={required}
              type="text"
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

const featureDescription = ({ fields, meta: { error, submitFailed } }) => (
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
        <Buttons type="danger" onClick={() => fields.remove(index)}>
          delete
        </Buttons>
        <h4>Key #{index + 1}</h4>
        <Row>
          <Col>
            <Label label="icon" />
            <br />
            <Field
              name={`${member}icon`}
              validate={required}
              component={FileUpload}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Label label="featureName" />
            <br />
            <Field
              name={`${member}featureName`}
              validate={required}
              component={InputField}
            />
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Label label="Description" />
            <Field
              name={`${member}description`}
              rows={5}
              validate={required}
              component={TextArea}
            />
          </Col>
        </Row>
        <br />
      </div>
    ))}
  </div>
);

function AddProduct({ handleSubmit, addProduct }) {
  const [loading, setLoading] = useState(false);

  const handleSubmits = event => {
    console.log(event, "this is event");
    setLoading(true);
    const slug = slugify(<span>product{event.product}</span>);
    event["slug"] = slug;
    return new Promise((resolve, reject) => {
      addProduct(event, resolve, reject);
    })
      .then(data => {
        setLoading(false);
        notification.success({
          message: "AnyTime",
          description: "Product is added successfully"
        });
      })
      .catch(err => {
        setLoading(false);
        console.log(err, "this is err");
        notification.error({
          message: "AnyTime",
          description: "error in adding product"
        });
      });
  };
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Add Products</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(handleSubmits)}>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="Title" />
              <Field
                name="title"
                validate={required}
                type="text"
                component={InputField}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Images</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label label="Feature Image" />
              <br />
              <Field
                name="featureImage"
                validate={required}
                component={FileUpload}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Label label="image" />
              <br />
              <Field
                name="productImage"
                multiple={true}
                validate={required}
                component={FileUpload}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h2>Feature Points</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldArray name="featurePoints" component={renderMembers} />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h2>Feature Descriptive</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldArray
                name="featureDescription"
                component={featureDescription}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Label label="Short Description" />
              <Field
                name="shortDescription"
                rows={5}
                validate={required}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Label label="Description" />
              <Field
                name="description"
                rows={5}
                validate={required}
                component={TextArea}
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
              Add Product
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
  connect(null, { addProduct })
)(AddProduct);
