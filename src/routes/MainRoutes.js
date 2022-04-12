import { Layout } from "antd";
import { MainSider, MainHeader } from "../layouts";
import { Switch, Route, Redirect } from "react-router-dom";
import { paths } from "../constants";
import {
  LichSuCuocGoi,
  NoMatch,
  QuanLyBenhNhan,
  TiepNhanCuocGoi,
  QuanLyNhanVien,
  LichLamViec,
  BangDieuKhien,
  TiepNhanHoSo,
} from "../pages";
import { useState } from "react";
import { ThongKe } from "../pages/thongKe/ThongKe";
import HoSoChuaCoTrongHeThong from "../pages/TiepNhanCuocGoi/hoSoChuaCoTrongHeThong/hoSoChuaCoTrongHeThong";

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
              path={paths.bang_dieu_khien}
              component={BangDieuKhien}
            />
            <Route
              exact
              path={paths.quan_ly_benh_nhan}
              component={QuanLyBenhNhan}
            />
            <Route
              exact
              path={paths.quan_ly_nhan_vien}
              component={QuanLyNhanVien}
            />
            <Route
              exact
              path={paths.tiep_nhan_ho_so}
              component={TiepNhanHoSo}
            />
            <Route exact path={paths.thong_ke} component={ThongKe} />

            <Route exact path={paths.lich_lam_viec} component={LichLamViec} />

            <Route
              exact
              path={paths.ho_so_chua_co_trong_he_thong}
              component={HoSoChuaCoTrongHeThong}
            />

            <Redirect exact from={paths.main} to={paths.thong_ke} />
            {/* <Redirect exact from={paths.main} to={paths.dang_nhap} /> */}

            <Route component={NoMatch} />
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
