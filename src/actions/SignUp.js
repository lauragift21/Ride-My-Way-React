import axios from "axios";
import * as types from "../actionTypes/SignUp";

const signUpSuccess = payload => ({
  type: types.SIGN_UP_SUCCESS,
  payload
});

const signUpError = payload => ({
  type: types.SIGN_UP_ERROR,
  payload
});

const signUpLoading = payload => ({
  type: types.SIGN_UP_LOADING,
  payload
});

export const clearError = () => ({
  type: types.CLEAR_ERROR
});

const signUp = (firstname, lastname, email, password, location) => dispatch => {
  dispatch(signUpLoading(true));
  return axios
    .post(`${__API__}/api/v1/auth/signup`, {
      firstname,
      lastname,
      email,
      password,
      location
    })
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(signUpLoading(false));
      dispatch(signUpSuccess(response.data));
    })
    .catch(error => {
      dispatch(signUpLoading(false));
      if (error.response) {
        return dispatch(signUpError(error.response.data));
      }
      return dispatch(
        signUpError({
          error: { message: "Server unreachable at the moment" }
        })
      );
    });
};

export default signUp;
