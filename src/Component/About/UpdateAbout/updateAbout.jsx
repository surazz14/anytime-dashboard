import React, { useState, useEffect } from "react";
import { Row, Col, Form, notification } from "antd";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Buttons from "../../Common/Ui/Button/button";
import Validators from "../../../Utils/utils";
import Spinner from "../../Common/Ui/Spinner/spinner";
import { getAbout, updateAbout } from "../../../Store/Action/about";

const FORM_NAME = "update_about";
const { required } = Validators;

function UpdateAbout({
  handleSubmit,
  initialize,
  match,
  getAbout,
  abouts,
  updateAbout
}) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    about: null,
    selectedFileList: null
  });

  const setAbout = () => {
    const result = abouts.filter(data => data.id === match.params.id);
    setLoading(false);
    setState({
      ...state,
      article: result
    });
    initialize({
      description: result[0].description,
      image: result[0].image
    });
  };

  useEffect(() => {
    setLoading(true);
    if (abouts.length > 0) {
      setAbout();
    } else {
      getAbout();
    }
  }, [abouts]);

  const onHandleSumbit = event => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      updateAbout(match.params.id, event, resolve, reject);
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
          description: err.response.data.error
        });
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>update About</h1>
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
                multiple={true}
                validate={required}
                component={FileUpload}
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
          <br />
          <Row type="flex" justify="center">
            <Buttons type="primary" htmlType="submit">
              update About
            </Buttons>
          </Row>
        </Spinner>
      </Form>

      <br />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  abouts: state.data.abouts
});

export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(mapStateToProps, { getAbout, updateAbout })
)(UpdateAbout);
