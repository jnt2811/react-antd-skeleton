import { Layout } from "antd";
import { MainSider, MainHeader } from "../layouts";
import { Switch, Route, Redirect } from "react-router-dom";
import { paths } from "../constants";
import { Dashboard, NoMatch } from "../pages";
import { useState } from "react";

export const MainRoutes = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const toggleSider = () => setSiderCollapsed((currentValue) => !currentValue);

  return (
    <Layout>
      <MainSider collapsed={siderCollapsed} />

      <Layout>
        <MainHeader siderCollapsed={siderCollapsed} toggleSider={toggleSider} />

        <Layout.Content>
          <Switch>
            <Route exact path={paths.bang_dieu_khien} component={Dashboard} />
            <Redirect exact from={paths.main} to={paths.bang_dieu_khien} />
            <Route component={NoMatch} />
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
