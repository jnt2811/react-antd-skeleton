import i18n, { languageKeys } from "../../i18n";
import style from "./qlbn.module.less";

export const QuanLyBenhNhan = () => {
  return (
    <div className={style["container"]}>
      <h1>{i18n.t(languageKeys.menu_Quan_ly_benh_nhan)}</h1>
    </div>
  );
};
