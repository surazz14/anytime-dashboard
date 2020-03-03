import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Buttons from "../../Common/Ui/Button/button";
import Validators from "../../../Utils/utils";
import { Field, FieldArray, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import slugify from "react-slugify";
import Spinner from "../../Common/Ui/Spinner/spinner";

const FORM_NAME = "update_product";
const { required } = Validators;

const renderMembers = ({
  fields,
  defaultValue,
  meta: { error, submitFailed }
}) => {
  return (
    <div>
      <div>
        <Buttons
          type="primary"
          onClick={() => defaultValue.map(data => fields.push(data))}
        >
          Update
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
                // defaultValue={member.key}
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
                // defaultValue={member.value}
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
};

const featureDescription = ({
  fields,
  defaultValue,
  meta: { error, submitFailed }
}) => (
  <div>
    <div>
      <Buttons
        type="primary"
        onClick={() => defaultValue.map(data => fields.push(data))}
      >
        Update
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
              name={`${member}.icon`}
              // defaultValue={member.icon}
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
              name={`${member}.feature`}
              // defaultValue={member.feature}
              component={InputField}
            />
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Label label="Description" />
            <Field
              name={`${member}.description`}
              rows={5}
              // defaultValue={member.description}
              component={TextArea}
            />
          </Col>
        </Row>
        <br />
      </div>
    ))}
  </div>
);

function UpdateProduct({ handleSubmit }) {
  const [loading, setLoading] = useState(false);

  const handleSubmits = event => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    const slug = slugify(<span>product{event.product}</span>);
    event["slug"] = slug;
    console.log(event, "this is event");
    notification.success({
      message: "AnyTime",
      description: "Product is updated successfully"
    });
  };
  const data = [
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "./logo192.png",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "aaaaaaaaaaaaaaaa",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "aaaaaaaaaaaaaaaa",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "aaaaaaaaaaaaaaaa",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "aaaaaaaaaaaaaaaa",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "aaaaaaaaaaaaaaaa",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    }
  ];
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Update Products</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(handleSubmits)}>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="product" />
              <Field
                name="product"
                type="text"
                defaultValue={data[0].product}
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
                name="fetureImage"
                // defaultValue={data[0].image}
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
                name="image"
                multiple={true}
                // fileList={data[0].image}
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
              <FieldArray
                name="featurePoints"
                defaultValue={data[0].feature}
                component={renderMembers}
              />
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
                defaultValue={data[0].descriptiveFeature}
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
                defaultValue={data[0].shortDescription}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Label label="Full Description" />
              <Field
                name="fullDescription"
                rows={5}
                defaultValue={data[0].description}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />
          <Row type="flex" justify="center">
            <Buttons type="primary" htmlType="submit">
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
  connect(null, {})
)(UpdateProduct);
