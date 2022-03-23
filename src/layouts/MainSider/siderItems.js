import {
  AccessibleIconAlt,
  ClockEight,
  IncomingCall,
  PhoneAlt,
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
        title: i18n.t(languageKeys.menu_Quan_ly_cuoc_goi),
        icon: <ClockEight />,
        path: paths.lich_su_cuoc_goi,
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
];
