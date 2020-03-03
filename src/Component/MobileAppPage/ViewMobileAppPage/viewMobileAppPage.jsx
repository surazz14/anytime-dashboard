import React from "react";
import { Row, Col } from "antd";
import Label from "../../Common/Ui/Label/label";
function ViewProduct() {
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
      <div>
        <Row>
          <Col>
            <Label label="Image" />
            <br />
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
            <Label label="Brief Description" />
            <br />
            {data[0].briefIntroduction}
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col>
            <Label label="How to use" />
            <br />
            {data[0].howToUse}
          </Col>
        </Row>
        <hr />
        <br />
      </div>
    </React.Fragment>
  );
}

export default ViewProduct;
