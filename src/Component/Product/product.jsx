import React from "react";
import { Row, Col, Divider, notification } from "antd";
import { Link } from "react-router-dom";
import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";

function Product() {
  const onDelete = id => {
    notification.success({
      message: "AnyTime",
      description: "Product is deleted successfully"
    });
  };
  const columns = [
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug"
    },
    {
      title: "product",
      dataIndex: "product",
      key: "product"
    },
    {
      title: "Feature Image",
      dataIndex: "featureImage",
      key: "featureImage",
      render: data => <img src={data} alt="img" />
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
      title: "Feature",
      dataIndex: "feature",
      key: "feature",
      render: text => (
        <div>
          <b>Link to app:</b>
          {text[0].key}
          <br />
          <b>Articles:</b>
          {text[0].value}
        </div>
      )
    },
    {
      title: "Short Description",
      dataIndex: "shortDescription",
      key: "shortDescription",
      render: text => <div>{text.substring(0, 100)}</div>
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: text => <div>{text.substring(0, 100)}</div>
    },
    {
      title: "Descriptive Feature",
      dataIndex: "descriptiveFeature",
      key: "descriptiveFeature",
      render: text => (
        <div>
          <b>feature:</b>
          {text[0].feature}
          <br />
          <b>description:</b>
          {text[0].description}
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
              pathname: `/products/update-product/${record.id}`
            }}
          >
            <Buttons>edit {record.id}</Buttons>
          </Link>
          <br />
          <Divider type="vertical" />
          <Buttons onClick={onDelete} type="danger">
            Delete
          </Buttons>
          <Divider type="vertical" />
          <Link
            to={{
              pathname: `/products/view-product/${record.id}`
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
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      featureImage: "ssssssssssssss",
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      featureImage: "aaaaaaaaaaaaaaaa",
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],
      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      featureImage: "aaaaaaaaaaaaaaaa",
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],
      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      featureImage: "aaaaaaaaaaaaaaaa",
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      featureImage: "aaaaaaaaaaaaaaaa",
      image: ["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", "cccccccccccccccccccc"],

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    },
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      image: "aaaaaaaaaaaaaaaa",

      feature: [
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" },
        { key: "new", value: "test" }
      ],
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      descriptiveFeature: [
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" },
        { feature: "test", description: "test", icon: "test" }
      ]
    }
  ];
  return (
    <React.Fragment>
      <Row>
        <Col className="title-header">
          <h1>Products</h1>
        </Col>
      </Row>
      <br />
      <Link to="/products/add-product">
        <Buttons>Add product</Buttons>
      </Link>

      <Row>
        <Col className="title-header">
          <Table data={data} columns={columns} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Product;
