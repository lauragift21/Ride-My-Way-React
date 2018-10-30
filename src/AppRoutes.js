import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";

const AppRoutes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
    </Fragment>
  </Router>
);
export default AppRoutes;
