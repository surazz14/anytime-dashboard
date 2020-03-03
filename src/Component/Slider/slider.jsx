import React, { useEffect, useState } from "react";
import { Divider, notification, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../Common/Ui/Spinner/spinner";
import Table from "../Common/Ui/Table/table";
import Buttons from "../Common/Ui/Button/button";
import { getSlider, onDeleteSlider } from "../../Store/Action/slider";

function Slider({ sliders, getSlider, onDeleteSlider }) {
  const [loading, setLoading] = useState(false);
  const onDelete = id => {
    return new Promise((resolve, reject) => {
      onDeleteSlider(id, resolve, reject);
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
    getSlider();
  }, []);

  useEffect(() => {
    if (sliders.length > 0) {
      setLoading(false);
    }
  }, [sliders]);

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
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Divider type="vertical" />
          <Buttons onClick={() => onDelete(record.id)} type="danger">
            Delete
          </Buttons>
        </span>
      )
    }
  ];
  return (
    <React.Fragment>
      <h1>SLider</h1>
      <Link to="/slider/add-slider">
        <Buttons>Add Slider</Buttons>
      </Link>
      <br />
      <Spinner spinning={loading}>
        {sliders && <Table data={sliders} columns={columns} />}
      </Spinner>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  sliders: state.data.sliders
});

export default connect(mapStateToProps, { getSlider, onDeleteSlider })(Slider);
