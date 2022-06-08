import { Record } from "../../components/Record/Record";
import i18n, { languageKeys } from "../../i18n";
import style from "./lscg.module.less";
export const LichSuCuocGoi = () => {
  return (
    <div className={style["container"]}>
      <Record />
      <h1>{i18n.t(languageKeys.menu_Lich_su_cuoc_goi)}</h1>
    </div>
  )
}
