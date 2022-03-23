import i18n, { languageKeys } from "../../i18n";

export const Login = () => {
  return (
    <div>
      <h1>{i18n.t(languageKeys.title_Dang_nhap)}</h1>
    </div>
  );
};
