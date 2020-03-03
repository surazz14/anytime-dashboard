import React, { useState } from "react";
import { Row, Col, Form, Icon,notification } from "antd";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import InputField from "../Common/Ui/Input/Input";
import Buttons from "../Common/Ui/Button/button";
import Spinner from "../Common/Ui/Spinner/spinner";
import Validators from "../../Utils/utils";
import { withRouter } from "react-router-dom";

import * as actions from "../../Store/Action/auth";

const { required } = Validators;
const FORM_NAME = "login_form";

function Login({ handleSubmit, onAuth, history }) {
  const [loading, setLoading] = useState(false);

  const handleSubmits = async event => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      onAuth(event, resolve, reject);
    })
      .then(data => {
        console.log("I am in login")
        history.push("/products");
        notification.success({
          message: "AnyTime",
          description: "You are successfully logged In"
        });
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        notification.error({
          message: "AnyTime",
          description: "error in login"
        });
        console.log(err);
      });
  };

  return (
    <div className="full-page">
      <div className="login-page">
        <div style={{ width: "70%", margin: "0 auto" }}>
          <Row>
            <Col className="title-header">
              <h2 style={{ color: "white", textAlign: "center" }}>Login</h2>
            </Col>
          </Row>
          <div style={{ display: "flex" }}>
            <Form onSubmit={handleSubmit(handleSubmits)}>
              <Spinner spinning={loading}>
                <Row>
                  <Col>
                    <Field
                      name="username"
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      validate={required}
                      placeholder="UserName"
                      component={InputField}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Field
                      name="password"
                      type="password"
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      validate={required}
                      placeholder="Password"
                      component={InputField}
                    />
                  </Col>
                </Row>
                <br />
                <Row type="flex" justify="center">
                  <Buttons type="primary" htmlType="submit">
                    Login
                  </Buttons>
                </Row>
              </Spinner>
            </Form>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (event, resolve, reject) =>
      dispatch(actions.auth(event, resolve, reject))
  };
};
export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(Login));
