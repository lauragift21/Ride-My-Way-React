import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import initialState from "../../store/initialState";
import ProtectedRoute from "../../containers/ProtectedRoute";

const state = {
  ...initialState
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe("ProtectedRoute component", () => {
  test("renders the ProtectedRoute component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <ProtectedRoute />
        </Router>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
