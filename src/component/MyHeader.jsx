import React from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu } from "antd";
import * as Common from "../api/common.js";

const { Header } = Layout;

class MyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCode: "admin",
      menuList: []
    };
  }
  componentDidMount() {
    this.loadHeaderMenuList();
  }
  async loadHeaderMenuList() {
    const res = await Common.getMenuListData({
      userCode: this.state.userCode
    });
    this.setState({
      menuList: res.data
    });
    //获取当前路径
    console.log(this.props);
    // const path = this.$router.history.current.path;
    // const pathArr = path.slice(1).split("/");
    // const router = "/" + pathArr[0] + "/" + pathArr[1];
    // for (const item of this.menuList) {
    // 	if (router === item.router) {
    // 		this.menuActive = item.index;
    // 	} else {
    // 		for (const cItem of item.children) {
    // 			if (router === cItem.router) {
    // 				this.menuActive = cItem.index;
    // 			}
    // 		}
    // 	}
    // }
  }
  getSidebarParams(path) {
    console.log(this.props);
    const pathArr = path.slice(1).split("/");
    if (pathArr.length === 2) {
      // this.changeSysCode(pathArr[0]);
      // this.changeMenuCode(pathArr[1]);
      this.getSidebarData(pathArr[0], pathArr[1]);
      // this.changeBreadcrumbList("");
      // if (this.sidebarList.length > 0) {
      //   this.changePermissions(this.sidebarList[0].permissions);
      // }
    }
  }
  async getSidebarData(systemCode, menuCode) {
    const res = await Common.getSidebarSubmit({
      sysCode: systemCode,
      menuCode: menuCode,
      userCode: this.state.userCode
    });
    // this.changeSidebarList(res.data);
  }

  listBodyDom(menuList) {
    console.log(menuList);
    return menuList.map((item, index) => (
      <Menu.SubMenu
        key={item.index}
        title={
          <span>
            <span>{item.title}</span>
          </span>
        }
      >
        {Array.isArray(item.children) &&
          item.children.length > 0 &&
          item.children.map((cItem, subIndex) => (
            <Menu.Item key={cItem.index}><Link onClick={() => {this.getSidebarParams(cItem.router)}} to={cItem.router}>{cItem.title}</Link></Menu.Item>
          ))}
      </Menu.SubMenu>
    ));
  }
  render() {
    const { menuList } = this.state;
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          {/* <Menu.SubMenu
          >
				</Menu.SubMenu> */}
          {this.listBodyDom(menuList)}
        </Menu>
      </Header>
    );
  }
}

export default MyHeader;
