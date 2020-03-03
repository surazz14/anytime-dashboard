import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link, NavLink } from "react-router-dom";
const { Sider } = Layout;
class SideBar extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Sider
        breakpoint="lg"
        style={{background:"white",color:"black"}}
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
      >
        <div className="logo">
          <img alt="anytime" src="/anytimeweb.svg" />
        </div>
        <Menu  mode="inline">
          <Menu.Item key="1">
            <NavLink activeStyle={{ color: "#e22394" }} to="/products">
              <Icon type="user" />
              <span className="nav-text">Products</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink activeStyle={{ color: "#e22394" }} to="/articles">
              <Icon type="book" theme="filled" />{" "}
              <span className="nav-text">Articles</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink activeStyle={{ color: "#e22394" }} to="/slider">
              <Icon type="file-image" theme="filled" />{" "}
              <span className="nav-text">Slider</span>
            </NavLink>
          </Menu.Item>
          {/* <Menu.Item key="4">
            <NavLink activeStyle={{ color: "#e22394" }} to="/mobile-page-app">
              <Icon type="mobile" theme="filled" />
              <span className="nav-text">Mobile App Page</span>
            </NavLink>
          </Menu.Item> */}

          {/* <Menu.Item key="5">
            <NavLink activeStyle={{ color: "#e22394" }} to="/calendar-page">
              <Icon type="calendar" theme="filled" />{" "}
              <span className="nav-text">Calendar Page</span>
            </NavLink>
          </Menu.Item> */}
          <Menu.Item key="6">
            <NavLink activeStyle={{ color: "#e22394" }} to="/external-link">
              <Icon type="user" />
              <span className="nav-text">External Link</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink activeStyle={{ color: "#e22394" }} to="/about">
              <Icon type="user" />
              <span className="nav-text">About</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
