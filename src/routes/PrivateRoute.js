import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../UserContext";

const PrivateRoute = (exact, path, component) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {component}
    </Route>
  );
};

export default PrivateRoute;
