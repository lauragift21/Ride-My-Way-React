import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React, { Fragment } from 'react';

import Home from './containers/Home';
import signUp from './containers/SignUp';
import signIn from './containers/SignIn';

const AppRoutes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={signUp} />
        <Route exact path="/login" component={signIn} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRoutes;
