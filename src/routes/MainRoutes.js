import { useEffect, useState } from "react";
import { Layout } from "antd";
import { MainSider, MainHeader } from "../layouts";
import { Switch, Route, Redirect } from "react-router-dom";
import { paths } from "../constants";
import {
  LichSuCuocGoi,
  NoMatch,
  QuanLyBenhNhan,
  TiepNhanCuocGoi,
  LichLamViec,
} from "../pages";
import usePhone from "../pages/TiepNhanCuocGoi/hooks/usePhone";
import InviteCall from "../pages/TiepNhanCuocGoi/Components/Phone/inviteCall";
import { useSelector } from "react-redux";
import { phoneStatus } from "../constants/phoneStatus";

export const MainRoutes = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const toggleSider = () => setSiderCollapsed((currentValue) => !currentValue);

  const { phoneInfo } = useSelector((s) => s.auth);

  const info = setTimeout(() => {
    return {
      domain: "tiennv",
      username: "100",
      password: "H5S21TubVN",
    };
  }, 3000);

  const register = usePhone(info);

  const { status } = useSelector((state) => state.call);
  return (
    <>
      {status === phoneStatus.invite && <InviteCall />}
      {status === phoneStatus.on_call && (
        <Redirect to={paths.tiep_nhan_cuoc_goi} />
      )}
      <Layout>
        <MainSider collapsed={siderCollapsed} />

        <Layout>
          <MainHeader
            siderCollapsed={siderCollapsed}
            toggleSider={toggleSider}
          />

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
              <Route exact path={paths.lich_lam_viec} component={LichLamViec} />
              <Redirect exact from={paths.main} to={paths.tiep_nhan_cuoc_goi} />

              <Route component={NoMatch} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};
