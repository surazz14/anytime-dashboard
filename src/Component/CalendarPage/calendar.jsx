import React from "react";
import { Divider, notification } from "antd";
import { Link } from "react-router-dom";
import { getCalendarPage, onDeleteCalendarpage } from "../../Store/Action/calendarPage";
import { connect } from "react-redux";

import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";

function CalendarPage() {
  const onDelete = id => {
    notification.success({
      message: "AnyTime",
      description: "External Link is deleted successfully"
    });
  };
  const columns = [
    {
      title: "Symptoms",
      dataIndex: "symptoms",
      key: "symptoms",
      render: text => (
        <div>
          {text.map(data => (
            <div>
              {data}
              <br />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Disorder",
      dataIndex: "disorder",
      key: "disorder",
      render: text => (
        <div>
          {text.map(data => (
            <div>
              {data}
              <br />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: `/calendar-page/update-calendar-page/${record.id}`
            }}
          >
            <Buttons>edit {record.id}</Buttons>
          </Link>
          <Divider type="vertical" />
          <Buttons onClick={onDelete} type="danger">
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

  const data = [
    {
      symptoms: ["aaaaaaaaa", "aaaaaaaaaaaa", "bbbbbbbbbbb"],
      disorder: ["aaaaaa", "bbbbbbb", "ccccccccc"]
    }
  ];
  return (
    <React.Fragment>
      <h1>Calendar Page</h1>
      <Link to="/calendar-page/add-calendar-page">
        <Buttons>Add CalendarPage</Buttons>
      </Link>
      <br />
      <Table columns={columns} data={data} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  calendarPage: state.data.articles
});

export default connect(mapStateToProps, {getCalendarPage,onDeleteCalendarpage })(
  CalendarPage
);
