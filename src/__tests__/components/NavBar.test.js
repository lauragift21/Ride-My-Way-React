import React from "react";
import { shallow } from "enzyme";
import NavBar from "../../components/NavBar";

describe("NavBar Component", () => {
  test("renders the NavBar Component", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
