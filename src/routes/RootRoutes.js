import { HashRouter, Switch, Route } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { MainRoutes } from "./MainRoutes";
import { paths } from "../constants";
import { NoMatch } from "../pages";

export const RootRoutes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={paths.auth} component={AuthRoutes} />
        <Route path={paths.main} component={MainRoutes} />
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
  );
};
