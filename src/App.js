import React from 'react';
import { render } from 'react-dom';
import './App.css';
import AppRoutes from './AppRoutes';

const App = () => (
  <div className="App">
    <AppRoutes />
  </div>
);

render(<App />, document.getElementById('root'));
