import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import Buttons from "../../Common/Ui/Button/button";
import Spinner from "../../Common/Ui/Spinner/spinner";
import { addExternalLink } from "../../../Store/Action/externalLink";

import { Field, FieldArray, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import Validators from "../../../Utils/utils";

const { required } = Validators;
const FORM_NAME = "add_external_link";

// const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
//   <div>
//     <div>
//       <Buttons type="primary" onClick={() => fields.push({})}>
//         Add
//       </Buttons>
//       {submitFailed && error && (
//         <span style={{ color: "red" }}>
//           <br />
//           {error}
//         </span>
//       )}
//     </div>
//     <br />
//     {fields.map((member, index) => (
//       <div key={index}>
//         <Buttons type="danger" onClick={() => fields.remove(index)}>
//           delete
//         </Buttons>
//         <h4>Key #{index + 1}</h4>

//         <Label label="Link to App" />
//         <Row>
//           <Col>
//             <Field
//               name={`${member}.link`}
//               validate={required}
//               type="text"
//               component={InputField}
//             />
//           </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Label label="Name" />

//             <Field
//               name={`${member}.name`}
//               validate={required}
//               type="text"
//               component={InputField}
//             />
//           </Col>
//         </Row>

//         <br />
//       </div>
//     ))}
//   </div>
// );

function AddExternalLink({ handleSubmit, addExternalLink }) {
  const [loading, setLoading] = useState(false);

  const onHandleSumbit = event => {
    console.log(event, "this is event");
    setLoading(true);
    return new Promise((resolve, reject) => {
      addExternalLink(event, resolve, reject);
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
        console.log(err, "this is error");
        setLoading(false);
        notification.error({
          message: "AnyTime",
          description: "dsas"
        });
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Add External Link</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onHandleSumbit)}>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="Link" />
              <br />
              <Field validate={required} name="link" component={InputField} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label label="Name" />
              <br />
              <Field validate={required} name="name" component={InputField} />
            </Col>
          </Row>
          <br />
          <Row type="flex" justify="center">
            <Buttons
              type="primary"
              style={{ backgroundColor: "#5cb85c", borderColor: "#5cb85c" }}
              htmlType="submit"
            >
              Add External Link
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
  connect(null, { addExternalLink })
)(AddExternalLink);
