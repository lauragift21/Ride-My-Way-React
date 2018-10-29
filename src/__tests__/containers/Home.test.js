import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Home from "../../containers/Home";

describe("Home component", () => {
  test("renders the Home component", () => {
    const wrapper = shallow(
      <Provider>
        <Home />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
