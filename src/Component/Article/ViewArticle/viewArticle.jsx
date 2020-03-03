import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Label from "../../Common/Ui/Label/label";
import { connect } from "react-redux";
import { getArticle } from "../../../Store/Action/article";
import Spinner from "../../Common/Ui/Spinner/spinner";

function ViewArticle({ articles, match, getArticle }) {
  const [loading, setLoading] = useState(false);
  const setArticle = () => {
    const result = articles.filter(data => data.id === match.params.id);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (articles.length > 0) {
      setArticle();
    } else {
      getArticle();
    }
  }, [articles]);
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
  console.log(articles, "this is articles");
  return (
    <React.Fragment>
      <h1>Articles</h1>
      <Spinner spinning={loading}>
        <Row>
          <Col>
            <Label label="Title" />
            <br />
            {articles.length>0 && articles[0].title}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Slug" />
            <br />
            {articles.length>0 && articles[0].slug}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Article" />
            <br />
            {data[0].article}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Short Description" />
            <br />
            {articles.length>0 && articles[0].shortDescription}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Full Description" />
            <br />
            {articles.length>0 && articles[0].description}
          </Col>
        </Row>
      </Spinner>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  articles: state.data.articles
});

export default connect(mapStateToProps, { getArticle })(ViewArticle);
