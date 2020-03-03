import React, { useState } from "react";
import { Row, Col, Form, notification } from "antd";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import Buttons from "../../Common/Ui/Button/button";
import Spinner from "../../Common/Ui/Spinner/spinner";

const FORM_NAME = "update_slider";

function UpdateSlider({ handleSubmit }) {
  const [loading, setLoading] = useState(false);

  const handleSubmits = event => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    notification.success({
      message: "AnyTime",
      description: "Image is updated successfully"
    });

    console.log(event, "this is event");
  };
  const data = [
    {
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"]
    }
  ];
  const defaultFileList = [
    {
      uid: "1",
      name: "xxx.png",
      url: "http://www.baidu.com/xxx.png"
    }
  ];
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Update Slider</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(handleSubmits)}>
        <Row>
          <Col>
            <h2>Images</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <br />
            <Field
              name="image"
              multiple={true}
              defaultFileList={defaultFileList}
              component={FileUpload}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Buttons type="primary" htmlType="submit">
            update image
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
)(UpdateSlider);
