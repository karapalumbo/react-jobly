import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";

function Routes({}) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/signup">
        {/* <Signup /> */}
      </Route>
      <Route exact path="/login">
        {/* <Login /> */}
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
        {/* <Profile /> */}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
