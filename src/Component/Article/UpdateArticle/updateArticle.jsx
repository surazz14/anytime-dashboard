import React, { useState, useEffect } from "react";
import { Field, reduxForm, change } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import slugify from "react-slugify";
import { Form, Row, Col, notification } from "antd";

import Label from "../../Common/Ui/Label/label";
import InputField from "../../Common/Ui/Input/Input";
import TextArea from "../../Common/Ui/TextArea/textArea";
import Spinner from "../../Common/Ui/Spinner/spinner";
import Buttons from "../../Common/Ui/Button/button";
import FileUpload from "../../Common/Ui/FileUpload/fileUpload";
import {
  getArticle,
  updateArticle
} from "../../../Store/Action/article";

const FORM_NAME = "update_article";

function UpdateArticle({
  handleSubmit,
  updateArticle,
  getArticle,
  articles,
  match,
  initialize
}) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    article: null,
    selectedFileList: null
  });

  const onChangefile = info => {
    let file;
    if (info.fileList.length > 1) {
      file = [info.fileList && info.fileList[info.fileList.length - 1]];
    } else {
      file = info.fileList;
    }
    console.log(file, "this is file");
    console.log(info, "this is fileList");
    const fileList = file.map(data => data.originFileObj);
    console.log(fileList, "this is file");
    setState({
      ...state,
      selectedFileList: fileList
    });
    console.log(fileList, "this is fileList");
    change(FORM_NAME, "image", fileList);
  };

  const setArticle = () => {
    const result = articles.filter(data => data.id === match.params.id);
    setLoading(false);
    setState({
      ...state,
      article: result
    });
    initialize({
      title: result[0].title,
      description: result[0].description,
      image: result[0].image,
      shortDescription:result[0].shortDescription
    });
  };

  useEffect(() => {
    setLoading(true);
    if (articles.length > 0) {
      setArticle();
    } else {
      getArticle();
    }
  }, [articles]);

  const onHandleSumbit = event => {
    const slug = slugify(<span>article{event.title}</span>);
    event["slug"] = slug;
    setLoading(true);
    return new Promise((resolve, reject) => {
      updateArticle(match.params.id, event, resolve, reject);
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
  const data = [
    {
      key: "1",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "3",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "4",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "5",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "6",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "7",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },

    {
      key: "8",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "9",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    },
    {
      key: "10",
      title: "John Brown",
      slug: "product-john-Brown",
      article: "test",
      shortDescription: 32,
      fullDescription: "New York No. 1 Lake Park"
    }
  ];

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onHandleSumbit)}>
        <h1 className={"title-header"}>Add Articles</h1>
        <Spinner spinning={loading}>
          <Row>
            <Col>
              <Label label="Title" />
              <Field name="title" component={InputField} />
            </Col>
          </Row>

          <br />

          {/* <Row>
            <Col>
              <Label label="Article" />
              <Field rows={5} name="article" component={TextArea} />
            </Col>
          </Row>
          <br /> */}
          <Row>
            <Col>
              <Label label="Image" />
              <br />
              <Field
                name="image"
                onChange={onChangefile}
                fileList={state.selectedFileList}
                component={FileUpload}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Label label="Short Description" />
              <Field rows={5} name="shortDescription" component={TextArea} />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Label label="Full Description" />
              <Field
                rows={5}
                name="description"
                defaultValue={data[0].fullDescription}
                component={TextArea}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Buttons block size="large" type="primary" htmlType="submit">
                Update
              </Buttons>
            </Col>
          </Row>
        </Spinner>
      </Form>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  articles: state.data.articles
});

export default compose(
  reduxForm({
    form: FORM_NAME
  }),
  connect(mapStateToProps, { getArticle, updateArticle })
)(UpdateArticle);

