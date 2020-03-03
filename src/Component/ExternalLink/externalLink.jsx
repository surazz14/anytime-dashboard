import React, { useEffect, useState } from "react";
import { Divider, notification } from "antd";
import { Link } from "react-router-dom";
import {
  getExternalLink,
  onDeleteExternalLink
} from "../../Store/Action/externalLink";
import { connect } from "react-redux";

import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";
import Spinner from "../Common/Ui/Spinner/spinner";

function ExternalLink({ externalLink, getExternalLink, onDeleteExternalLink }) {
  const [loading, setLoading] = useState(false);
  const onDelete = id => {
    return new Promise((resolve, reject) => {
      onDeleteExternalLink(id, resolve, reject);
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
          description: "error in external Link"
        });
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getExternalLink();
  }, []);

  useEffect(() => {
    if (externalLink.length > 0) {
      setLoading(false);
    }
  }, [externalLink]);
  const columns = [
    {
      title: "Link",
      dataIndex: "link",
      key: "link"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: `/external-link/update-external-link/${record.id}`
            }}
          >
            <Buttons>edit</Buttons>
          </Link>
          <Divider type="vertical" />
          <Buttons onClick={()=>onDelete(record.id)} type="danger">
            Delete
          </Buttons>
          <Divider type="vertical" />
          {/* <Link
            to={{
              pathname: `/view-product/${record.id}`
            }}
          >
            <Buttons type="primary">View</Buttons>
          </Link> */}
        </span>
      )
    }
  ];

  // const data = [
  //   {
  //     key: "1",
  //     link:'a',
  //     name:"as"
  //   },
  //   {
  //     key: "2",
  //     link:"das",
  //     name:"das"
  //   }
  // ];
  return (
    <React.Fragment>
      <h1>
        External <Link></Link>
      </h1>
      <Link to="/external-link/add-external-link">
        <Buttons>Add External Link</Buttons>
      </Link>
      <br />
      <Spinner spinning={loading}>
        {externalLink && <Table data={externalLink} columns={columns} />}
      </Spinner>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  externalLink: state.data.externalLink
});

export default connect(mapStateToProps, {
  getExternalLink,
  onDeleteExternalLink
})(ExternalLink);
