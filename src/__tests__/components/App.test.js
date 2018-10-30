import React from "react";
import { shallow } from "enzyme";
import App from "../../AppRoutes";

describe("App Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
