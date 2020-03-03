import React from "react";
import { Table, Divider, Tag } from "antd";
import { Link } from "react-router-dom";


function Tables({data,columns}) {
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
}
export default Tables;
