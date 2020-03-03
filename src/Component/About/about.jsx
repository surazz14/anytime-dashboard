import React, { useEffect, useState } from "react";
import { Divider, notification } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getAbout, onDeleteAbout } from "../../Store/Action/about";

import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";
import Spinner from "../Common/Ui/Spinner/spinner";

function About({ abouts, getAbout, onDeleteAbout }) {
  const [loading, setLoading] = useState(false);
  const onDelete = id => {
    return new Promise((resolve, reject) => {
      onDeleteAbout(id, resolve, reject);
    })
      .then(data => {
        setLoading(false);
        notification.success({
          message: "AnyTime",
          description: data.data.success
        });
      })
      .catch(err => {
        console.log(err.data, "this is error");
        setLoading(false);
        notification.error({
          message: "AnyTime",
          description: "error in deleting about"
        });
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAbout();
  }, []);

  useEffect(() => {
    if (abouts.length > 0) {
      setLoading(false);
    }
  }, [abouts]);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: text => (
        <img src={"http://anytime.herokuapp.com/" + text} alt="img" />
      )
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: `/about/update-about/${record.id}`
            }}
          >
            <Buttons>edit</Buttons>
          </Link>
          <Divider type="vertical" />
          <Buttons onClick={()=>onDelete(record.id)} type="danger">
            Delete
          </Buttons>
        </span>
      )
    }
  ];

  // const data = [
  //   {
  //     key: "1",
  //     title: "John Brown",
  //     image: "./anytimeweb.svg",
  //     description: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "1",
  //     title: "John Brown",
  //     image: "./anytimeweb.svg",
  //     description: "New York No. 1 Lake Park"
  //   }
  // ];
  console.log(abouts, "this is abouts");
  return (
    <React.Fragment>
      <h1>About</h1>
      <Link to="/about/add-about">
        <Buttons>Add About</Buttons>
      </Link>
      <br />
      <Spinner spinning={loading}>
        {abouts && <Table data={abouts} columns={columns} />}
      </Spinner>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  abouts: state.data.abouts
});

export default connect(mapStateToProps, { getAbout, onDeleteAbout })(About);
