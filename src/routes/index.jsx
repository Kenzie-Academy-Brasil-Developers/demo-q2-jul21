import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import Route from "./route";
import { useSelector } from "react-redux";
import NotFound from "../pages/404";

const Routes = () => {
  const { token } = useSelector((store) => store.user);

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={NotFound} isPrivate={!!token} />
    </Switch>
  );
};

export default Routes;
