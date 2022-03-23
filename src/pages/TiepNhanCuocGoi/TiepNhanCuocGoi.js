import i18n, { languageKeys } from "../../i18n";
import style from "./tncg.module.less";

export const TiepNhanCuocGoi = () => {
  return (
    <div className={style["container"]}>
      <h1>{i18n.t(languageKeys.menu_Tiep_nhan_cuoc_goi)}</h1>
    </div>
  );
};
