import React from "react";
import { shallow } from "enzyme";
import Hero from "../../components/Hero";

describe("Hero Component", () => {
  test("renders the Hero Component", () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.exists()).toBe(true);
  });
});
