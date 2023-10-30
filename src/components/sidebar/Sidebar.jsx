import React, { useState } from "react";
import "../../index.css";

import {
  DesktopOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Accueil", "/", <DesktopOutlined />),
  getItem("Utilisateurs", "user", <UserOutlined />),
  getItem("Signout", "signout", <PoweroffOutlined />),
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
      className="menu-bar"
    >
      <Menu
        onClick={(item) => {
          item.key === "signout" ? navigate("/login") : navigate(item.key);
        }}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["/"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
