import axios from "axios";
import * as types from "../actionTypes/SignIn";

const signInSuccess = payload => ({
  type: types.SIGN_IN_SUCCESS,
  payload
});

const signInError = payload => ({
  type: types.SIGN_IN_ERROR,
  payload
});

const signInLoading = payload => ({
  type: types.SIGN_IN_LOADING,
  payload
});

const signIn = (email, password) => dispatch => {
  dispatch(signInLoading(true));
  return axios
    .post(`${__API__}/api/v1/auth/login`, { email, password })
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(signInLoading(false));
      dispatch(signInSuccess(response.data));
    })
    .catch(error => {
      dispatch(signInLoading(false));
      if (error.response) {
        return dispatch(signInError(error.response.data));
      }
      return dispatch(
        signInError({
          error: { message: "Server unreachable at the moment" }
        })
      );
    });
};

export default signIn;
