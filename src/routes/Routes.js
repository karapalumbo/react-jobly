import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
// import PrivateRoute from "./PrivateRoute";
import ProfileForm from "../ProfileForm";

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

      <Route exact path="/companies">
        <CompanyList />
      </Route>

      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>

      <Route exact path="/jobs">
        <JobList />
      </Route>

      <Route exact path="/profile">
        <ProfileForm />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
