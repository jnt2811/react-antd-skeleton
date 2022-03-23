import { Layout } from "antd";
import style from "./mainSider.module.less";

export const MainSider = ({ collapsed = false }) => {
  return (
    <Layout.Sider
      theme="light"
      collapsed={collapsed}
      className={style["container"]}
    >
      Main Sider
    </Layout.Sider>
  );
};
