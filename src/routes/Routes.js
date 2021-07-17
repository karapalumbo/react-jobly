import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetail />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <JobList />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        {/* <Profile /> */}
      </PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
