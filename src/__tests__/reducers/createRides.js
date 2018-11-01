import createRides from "../../reducers/createRides";
import * as types from "../../actionTypes/CreateRides";

describe("rides reducer", () => {
  it("should return initial state", () => {
    expect(createRides(undefined, {})).toEqual({
      data: {},
      error: "",
      loading: false
    });
  });
  it("should handle RIDE_REQUEST_LOADING", () => {
    const action = { type: types.RIDE_REQUEST_LOADING, payload: true };
    expect(createRides({}, action)).toEqual({
      loading: true
    });
  });
  it("should handle RIDE_REQUEST_SUCCESS", () => {
    const action = {
      type: types.RIDE_REQUEST_SUCCESS,
      payload: {
        data: {
          id: 12,
          location: "Seattle, WA",
          seats: 4
        }
      }
    };
    expect(createRides({}, action)).toEqual({
      data: {
        data: {
          id: 12,
          location: "Seattle, WA",
          seats: 4
        }
      }
    });
  });
  it("should handle RIDE_REQUEST_ERROR", () => {
    const action = {
      type: types.RIDE_REQUEST_ERROR,
      payload: {
        error: ""
      }
    };
    expect(createRides({}, action)).toEqual({
      error: ""
    });
  });
});
