import { Switch } from "react-router-dom";
import Login from "../pages/Login";

import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
