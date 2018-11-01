import React from "react";
import { shallow } from "enzyme";
import Profile from "../../components/Profile";

describe("Profile Component", () => {
  test("renders the Profile Component", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.exists()).toBe(true);
  });
});
