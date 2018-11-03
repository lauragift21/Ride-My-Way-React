import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Menu from "../../components/Menu";

const mockStore = configureMockStore();
const store = mockStore({});

describe("NavBar Component", () => {
  test("renders the NavBar Component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
