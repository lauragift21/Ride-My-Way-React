import React from "react";
import { shallow } from "enzyme";
import ViewRides from "../../components/ViewRides";

const ride = {
  created_at: "2018-10-31T19:55:14.246Z",
  departure: "2018-10-11T23:00:00.000Z",
  destination: "Ondo",
  id: 1,
  location: "lagos",
  seats: 2,
  updated_at: "2018-10-31T19:55:14.246Z",
  userid: 4
};

describe("ViewRides Component", () => {
  test("renders the ViewRides Component", () => {
    const wrapper = shallow(<ViewRides ride={ride} />);
    expect(wrapper.exists()).toBe(true);
  });
});
