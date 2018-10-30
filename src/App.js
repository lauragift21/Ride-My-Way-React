import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import AppRoutes from "./AppRoutes";
import "./App.css";
import configureStore from "./store/configureStore";
import userIsLoggedIn from "./utils/isLoggedIn";
import { logOutUser, setLoggedInUser } from "./actions/auth";

const store = configureStore();

if (userIsLoggedIn) {
  // set current user in store
  const user = JSON.parse(localStorage.user);
  store.dispatch(setLoggedInUser(user));
} else {
  store.dispatch(logOutUser());
}

// wrap the provider to give the store access to the application
const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

render(<App />, document.getElementById("app"));
