import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  // const { token } = useSelector((store) => store.user);

  const token = false;

  // a rota é privada e usuario nao ta logado = login
  // rota privada usuario logado = ok
  // rota nao privada e usuario logado = nao ta ok
  // rota nao privada e usuario nao logado = ok

  // true e true = ok
  // true e false = login
  // false e true = dashboard
  // false e false = ok

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
