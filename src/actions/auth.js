import { LOG_OUT_USER, SET_CURRENT_USER } from "../actionTypes/auth";

export const logOut = () => ({
  type: LOG_OUT_USER
});
export const logOutUser = () => dispatch => {
  localStorage.removeItem("user");
  dispatch(logOut());
};

export const setLoggedInUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
