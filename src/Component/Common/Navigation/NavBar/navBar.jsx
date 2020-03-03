import React from "react";
import { Menu, Layout } from "antd";
import Buttons from "../../Ui/Button/button";
import { Link, withRouter } from "react-router-dom";
const { Header } = Layout;

function NavBar({ history }) {
  const onLogout = () => {
    history.push("/");
    localStorage.removeItem("auth");
  };

  return (
    <React.Fragment>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu>
          <Menu.Item style={{ float: "right" }}>
            <Buttons onClick={onLogout}>LogOut</Buttons>
          </Menu.Item>
        </Menu>
      </Header>
    </React.Fragment>
  );
}
export default withRouter(NavBar);
