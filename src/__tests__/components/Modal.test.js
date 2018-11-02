import React from "react";
import { shallow } from "enzyme";
import Modal from "../../components/Modal";

describe("Modal Component", () => {
  test("renders the Modal Component", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.exists()).toBe(true);
  });
});
