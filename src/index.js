import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './components/App';

// wrap the provider to give the store access to the application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
