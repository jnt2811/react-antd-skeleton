import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import style from "./mainHeader.module.less";

export const MainHeader = ({
  siderCollapsed = false,
  toggleSider = () => {},
}) => {
  return (
    <Layout.Header className={style["container"]}>
      <Button
        onClick={toggleSider}
        icon={siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      ></Button>
    </Layout.Header>
  );
};
