import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Profile from "../../components/Profile";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Profile Component", () => {
  test("renders the Profile Component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
