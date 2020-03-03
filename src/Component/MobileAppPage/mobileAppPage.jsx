import React from "react";
import { Row, Col, Divider, notification } from "antd";
import { Link } from "react-router-dom";
import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";
function MobileAppPage() {
  const onDelete = id => {
    notification.success({
      message: "AnyTime",
      description: "Product is deleted successfully"
    });
  };
  const columns = [
    {
      title: "Brief Introduction",
      dataIndex: "briefIntroduction",
      key: "briefIntroduction",
      render: text => <div>{text.substring(0, 100)}</div>
    },
    {
      title: "How to use",
      dataIndex: "howToUse",
      key: "howToUse",
      render: text => <div>{text.substring(0, 100)}</div>
    },
    {
      title: "Feature",
      dataIndex: "feature",
      key: "feature",
      render: text => (
        <div>
          <b>key:</b>
          {text[0].key}
          <br />
          <b>Value:</b>
          {text[0].value}
        </div>
      )
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: text => (
        <div>
          <img src={data[0]} alt="img" />
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
              pathname: `/mobile-page-app/update-mobile-page-app/${record.id}`
            }}
          >
            <Buttons>edit {record.id}</Buttons>
          </Link>
          <Divider type="vertical" />
          <Buttons onClick={onDelete} type="danger">
            Delete
          </Buttons>
          <Divider type="vertical" />
          <Link
            to={{
              pathname: `/mobile-page-app/view-mobile-page-app/${record.id}`
            }}
          >
            <Buttons type="primary">View</Buttons>
          </Link>
        </span>
      )
    }
  ];
  const data = [
    {
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      briefIntroduction:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      howToUse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      briefIntroduction:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      howToUse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      briefIntroduction:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      howToUse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      briefIntroduction:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      howToUse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      briefIntroduction:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      howToUse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }
  ];
  return (
    <React.Fragment>
      <h1>Mobile App Page</h1>
      <Link to="/mobile-page-app/add-mobile-page-app">
        <Buttons>Add Mobile Page App</Buttons>
      </Link>
      <br />
      <Table columns={columns} data={data} />
    </React.Fragment>
  );
}

export default MobileAppPage;
