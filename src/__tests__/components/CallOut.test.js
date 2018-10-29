import React from "react";
import { shallow } from "enzyme";
import CallOut from "../../components/CallOut";

describe("CallOut Component", () => {
  test("renders the CallOut Component", () => {
    const wrapper = shallow(<CallOut />);
    expect(wrapper.exists()).toBe(true);
  });
});
