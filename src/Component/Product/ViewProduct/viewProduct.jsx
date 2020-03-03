import React from "react";
import { Row, Col } from "antd";
import Label from "../../Common/Ui/Label/label";
function ViewProduct() {
  const data = [
    {
      slug: "think_and_grow_rich",
      product: "Think and Grow Rich",
      featureImage: "./logo192.png",
      image: ["./logo192.png", "./logo192.png", "./logo192.png"],
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
      featureImage: "./logo192.png",
      image: ["./logo192.png", "./logo192.png", "./logo192.png"],
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
      featureImage: "./logo192.png",
      image: ["./logo192.png", "./logo192.png", "./logo192.png"],
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
      featureImage: "./logo192.png",
      image: ["./logo192.png", "./logo192.png", "./logo192.png"],
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
      featureImage: "./logo192.png",
      image: ["./logo192.png", "./logo192.png", "./logo192.png"],
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
      featureImage: "./logo192.png",
      image: ["./logo192.png", "./logo192.png", "./logo192.png"],
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
      <div>
        <Row>
          <Col>
            <Label label="Slug" />
            <br />
            {data[0].slug}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Product" />
            <br />
            {data[0].product}
          </Col>
        </Row>
        <hr />
        <br />

        <Row>
          <Col>
            <Label label="Feature Image" />
            <br />
            {data[0].featureImage}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Image" />
            <br />
            {data[0].image.map(data => (
              <img src={data[0]} alt="img" />
            ))}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Feature" />
            <br />
            {data[0].feature.map(data => (
              <div>
                key:{data.key}
                <br />
                value:{data.value}
              </div>
            ))}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Short Description" />
            <br />
            {data[0].shortDescription}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Description" />
            <br />
            {data[0].description}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="Descriptive Feature" />
            <br />
            {data[0].descriptiveFeature.map(data => (
              <div>
                feature:{data.feature}
                <br />
                test:{data.description}
                <br />
                icon:{data.icon}
              </div>
            ))}{" "}
          </Col>
        </Row>
        <hr />
        <br />
      </div>
    </React.Fragment>
  );
}

export default ViewProduct;
