import React from "react";
import { Layout, Menu, Icon, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { menuData } from "./menuData";
import "./index.scss";

import { LayoutState, LayoutProps } from "./interface";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class LayoutWrapper extends React.Component<
  LayoutProps,
  LayoutState
> {
  iconType = ["pie-chart", "desktop", "file", "team"];
  state = {
    collapsed: false,
    hei: 0
  };

  componentDidMount() {
    this.setState({
      hei: window.innerHeight - 74
    });
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { hei } = this.state;
    return (
      <Layout
        className="components-layout-demo-side"
        style={{ minHeight: "100vh" }}
      >
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["/"]} mode="inline">
            {menuData.map((item, index) => {
              return (
                <Menu.Item key={item.path}>
                  <NavLink to={item.path}>
                    <Icon type={this.iconType[index % this.iconType.length]} />
                    <span>{item.name}</span>
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0, marginBottom: 10 }}>
            <Title style={{ paddingLeft: 16 }}>React 入门</Title>
          </Header>
          <Content
            style={{
              margin: "0 16px",
              height: hei ? hei : "auto",
              overflow: "auto"
            }}
          >
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
