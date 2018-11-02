import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ViewRides from "../../components/ViewRides";

const mockStore = configureMockStore();
const store = mockStore({});

describe("ViewRides Component", () => {
  test("renders the ViewRides Component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ViewRides />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
