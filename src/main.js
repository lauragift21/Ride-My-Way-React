import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

const Index = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
);

render(<Index />, document.getElementById('root'));
