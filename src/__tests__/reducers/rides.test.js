import rides from "../../reducers/rides";
import * as types from "../../actionTypes/rides";

describe("rides reducer", () => {
  it("should return initial state", () => {
    expect(rides(undefined, {})).toEqual({
      data: [],
      error: "",
      loading: false
    });
  });
  it("should handle FETCH_RIDES_LOADING", () => {
    const action = { type: types.FETCH_RIDES_LOADING, payload: true };
    expect(rides({}, action)).toEqual({
      loading: true
    });
  });
  it("should handle FETCH_RIDES_SUCCESS", () => {
    const action = {
      type: types.FETCH_RIDES_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            location: "lagos",
            destination: "Ondo"
          }
        ]
      }
    };
    expect(rides({}, action)).toEqual({
      data: {
        data: [
          {
            id: 1,
            location: "lagos",
            destination: "Ondo"
          }
        ]
      }
    });
  });
  it("should handle FETCH_RIDES_ERROR", () => {
    const action = {
      type: types.FETCH_RIDES_ERROR,
      payload: {
        error: ""
      }
    };
    expect(rides({}, action)).toEqual({
      error: ""
    });
  });
});
