import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import ProtectedRoute from "./containers/ProtectedRoute";
import Rides from "./containers/Rides";
import CreateRides from "./containers/CreateRides";
import MyRides from "./containers/MyRides";
import Profile from "./components/Profile";

const AppRoutes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/logout" render={() => <Redirect to="/" />} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
      <ProtectedRoute exact path="/rides" component={Rides} />
      <ProtectedRoute exact path="/offerRides" component={CreateRides} />
      <ProtectedRoute exact path="/myRides" component={MyRides} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Fragment>
  </Router>
);
export default AppRoutes;
