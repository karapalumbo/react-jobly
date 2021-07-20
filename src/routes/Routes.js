import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import PrivateRoute from "./PrivateRoute";
import ProfileForm from "../forms/ProfileForm";

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
        <ProfileForm />
      </PrivateRoute>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
