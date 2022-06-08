import {
  AccessibleIconAlt,
  ClockEight,
  IncomingCall,
  PhoneAlt,
  Calendar,
  Statistical,
  Docs,
  Chart,
} from "../../assets/svgs";
import { paths, keys } from "../../constants";
import { rid } from "../../helpers";
import i18n, { languageKeys } from "../../i18n";

export const siderItems = [
  {
    key: keys.feature_Quan_ly_cuoc_goi,
    title: i18n.t(languageKeys.menu_Quan_ly_cuoc_goi),
    icon: <PhoneAlt />,
    subs: [
      {
        key: rid(),
        title: i18n.t(languageKeys.menu_Tiep_nhan_cuoc_goi),
        icon: <IncomingCall />,
        path: paths.tiep_nhan_cuoc_goi,
        subs: [],
      },
      {
        key: rid(),
        title: i18n.t(languageKeys.menu_Lich_su_cuoc_goi),
        icon: <ClockEight />,
        path: paths.lich_su_cuoc_goi,
        subs: [],
      },
      {
        key: rid(),
        title: i18n.t(languageKeys.menu_Bang_dieu_khien),
        icon: <Chart />,
        path: paths.bang_dieu_khien,
        subs: [],
      },
    ],
  },
  {
    key: keys.feature_Quan_ly_benh_nhan,
    title: i18n.t(languageKeys.menu_Quan_ly_benh_nhan),
    icon: <AccessibleIconAlt />,
    path: paths.quan_ly_benh_nhan,
    subs: [],
  },
  {
    key: keys.feature_Quan_ly_nhan_vien,
    title: i18n.t(languageKeys.menu_Quan_ly_nhan_vien),
    icon: <Docs />,
    path: paths.quan_ly_nhan_vien,
    subs: [],
  },
  {
    key: keys.feature_Lich_Lam_viec,
    title: i18n.t(languageKeys.menu_Lich_lam_viec),
    icon: <Calendar />,
    path: paths.lich_lam_viec,
    subs: [],
  },
  {
    key: keys.feature_Thong_ke,
    title: i18n.t(languageKeys.menu_Thong_ke),
    icon: <Statistical />,
    path: paths.thong_ke,
    subs: [],
  },

];
