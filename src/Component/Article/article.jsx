import React, { useEffect, useState } from "react";
import { Divider, notification } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";
import Spinner from "../Common/Ui/Spinner/spinner";
import { getArticle, onDeleteArticle } from "../../Store/Action/article";

function Article({ getArticle, articles, onDeleteArticle }) {
  const [loading, setLoading] = useState(false);
  const onDelete = id => {
    return new Promise((resolve, reject) => {
      onDeleteArticle(id, resolve, reject);
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
          description: "error in deleting article"
        });
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getArticle();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      setLoading(false);
    }
  }, [articles]);

  console.log(loading, "this is loading");

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug"
    },
    {
      title: "Article",
      dataIndex: "article",
      key: "article"
    },
    {
      title: "Short Description",
      dataIndex: "shortDescription",
      key: "shortDescription"
    },
    {
      title: "Full Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: text => (
        <img src={"http://anytime.herokuapp.com/" + text} alt="img" />
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: `/articles/update-article/${record.id}`
            }}
          >
            <Buttons>edit </Buttons>
          </Link>
          <Divider type="vertical" />
          <Buttons onClick={() => onDelete(record.id)} type="danger">
            Delete
          </Buttons>
          <Divider type="vertical" />
          <Link
            to={{
              pathname: `/articles/view-article/${record.id}`
            }}
          >
            <Buttons type="primary">View</Buttons>
          </Link>
        </span>
      )
    }
  ];

  // const data = [
  //   {
  //     key: "1",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "2",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "3",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "4",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "5",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "6",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "7",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },

  //   {
  //     key: "8",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "9",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "10",
  //     title: "John Brown",
  //     slug: "product-john-Brown",
  //     article: "test",
  //     shortDescription: 32,
  //     fullDescription: "New York No. 1 Lake Park"
  //   }
  // ];

  console.log(articles, "this is articles");
  return (
    <React.Fragment>
      <h1>Articles</h1>
      <Link to="/articles/add-article">
        <Buttons>Add Articles</Buttons>
      </Link>
      <br />
      <Spinner spinning={loading}>
        {articles && <Table data={articles} columns={columns} />}
      </Spinner>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  articles: state.data.articles
});

export default connect(mapStateToProps, { getArticle, onDeleteArticle })(
  Article
);
