import i18n, { languageKeys } from "../../i18n";
import style from "./llv.module.less";

export const LichLamViec = () => {
  return (
    <div className={style["container"]}>
      <h1>{i18n.t(languageKeys.menu_Lich_su_cuoc_goi)}</h1>
    </div>
  );
};
