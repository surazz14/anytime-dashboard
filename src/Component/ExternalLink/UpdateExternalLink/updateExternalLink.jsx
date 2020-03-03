import React, { useState,useEffect } from "react";
import { Row, Col, Form, notification } from "antd";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import Buttons from "../../Common/Ui/Button/button";
import { Field,reduxForm,change } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import Spinner from "../../Common/Ui/Spinner/spinner";
import {
  getExternalLink,
  updateExternalLink
} from "../../../Store/Action/externalLink";

const FORM_NAME = "update_external_link";


function UpdateExternalLink({
  handleSubmit,
  updateExternalLink,
  getExternalLink,
  externalLink,
  match,
  initialize
}) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    externalLink: null,
  });

  const setExternalLink = () => {
    const result = externalLink.filter(data => data.id === match.params.id);
    setLoading(false);
    setState({
      ...state,
      externalLink: result
    });
    initialize({
      name: result[0].name,
      link:result[0].link
    });
  };

  useEffect(() => {
    setLoading(true);
    if (externalLink.length > 0) {
      setExternalLink();
    } else {
      getExternalLink();
    }
  }, [externalLink]);

  const onHandleSumbit = event => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      updateExternalLink(match.params.id, event, resolve, reject);
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
          description: 'error'
        });
        console.log(err);
      });
  };
 
  return (
    <React.Fragment>
    <Row>
      <Col className="title-header">
        <h1>Update External Link</h1>
      </Col>
    </Row>
    <Form onSubmit={handleSubmit(onHandleSumbit)}>
      <Spinner spinning={loading}>
        <Row>
          <Col>
            <Label label="Link" />
            <br />
            <Field name="link" component={InputField} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label label="Name" />
            <br />
            <Field name="name" component={InputField} />
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="center">
          <Buttons
            type="primary"
            style={{ backgroundColor: "#5cb85c", borderColor: "#5cb85c" }}
            htmlType="submit"
          >
            Update External Link
          </Buttons>
        </Row>
      </Spinner>
    </Form>
    <br />
  </React.Fragment>
  );
}

const mapStateToProps = state => ({
  externalLink: state.data.externalLink
});

export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(mapStateToProps, { getExternalLink, updateExternalLink })
)(UpdateExternalLink);
