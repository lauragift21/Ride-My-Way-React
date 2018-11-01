import signup from "../../reducers/signUp";
import auth from "../../reducers/auth";
import * as types from "../../actionTypes/SignUp";

describe("signUp reducer", () => {
  it("should return initial state", () => {
    expect(signup(undefined, {})).toEqual({
      loading: false,
      error: ""
    });
  });

  it("should handle LOADING", () => {
    const action = { type: types.SIGN_UP_LOADING, payload: true };
    expect(signup({}, action)).toEqual({
      loading: true
    });
  });

  it("should handle SIGN_UP_ERROR", () => {
    const action = {
      type: types.SIGN_UP_ERROR,
      payload: { email: "email is already registered" }
    };
    expect(signup({}, action)).toEqual({
      error: { email: "email is already registered" }
    });
  });

  // it("should handle SIGN_UP_SUCCESS", () => {
  //   const action = {
  //     type: types.SIGN_UP_SUCCESS,
  //     payload: {
  //       signin: { error: "", loading: false },
  //       signup: { error: "", loading: false }
  //     }
  //   };

  //   expect(auth({}, action)).toEqual({
  //     signin: { error: "", loading: false },
  //     signup: { error: "", loading: false }
  //   });
  // });
});
