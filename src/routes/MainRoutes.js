import { Layout } from "antd";
import { MainSider, MainHeader } from "../layouts";
import { Switch, Route, Redirect } from "react-router-dom";
import { paths } from "../constants";
import {
  LichSuCuocGoi,
  NoMatch,
  QuanLyBenhNhan,
  TiepNhanCuocGoi,
} from "../pages";
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
            <Route
              exact
              path={paths.tiep_nhan_cuoc_goi}
              component={TiepNhanCuocGoi}
            />
            <Route
              exact
              path={paths.lich_su_cuoc_goi}
              component={LichSuCuocGoi}
            />
            <Route
              exact
              path={paths.quan_ly_benh_nhan}
              component={QuanLyBenhNhan}
            />

            <Redirect exact from={paths.main} to={paths.tiep_nhan_cuoc_goi} />

            <Route component={NoMatch} />
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
