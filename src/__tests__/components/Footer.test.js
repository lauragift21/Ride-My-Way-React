import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "../../components/Footer";

describe("Footer Component", () => {
  test("renders the Footer Component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
