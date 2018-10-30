import signin from "../../reducers/signIn";
// import auth from "../../reducers/auth";
import * as types from "../../actionTypes/SignIn";

describe("signIn reducer", () => {
  it("should return initial state", () => {
    expect(signin(undefined, {})).toEqual({
      loading: false,
      error: ""
    });
  });

  it("should handle SIGN_IN_LOADING", () => {
    const action = { type: types.SIGN_IN_LOADING, payload: true };
    expect(signin({}, action)).toEqual({
      loading: true
    });
  });

  it("should handle SIGN_IN_ERROR", () => {
    const action = {
      type: types.SIGN_IN_ERROR,
      payload: { email: "email is already registered" }
    };
    expect(signin({}, action)).toEqual({
      error: { email: "email is already registered" }
    });
  });

  // it("should handle SIGN_IN_SUCCESS", () => {
  //   const action = {
  //     type: types.SIGN_IN_SUCCESS,
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
