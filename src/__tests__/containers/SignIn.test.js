import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import initialState from "../../store/initialState";
import SignIn from "../../containers/SignIn";

const state = {
  ...initialState
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe("SignIn component", () => {
  test("renders the SignIn component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SignIn />
        </Router>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
