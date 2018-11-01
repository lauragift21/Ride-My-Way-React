import { LOG_OUT_USER, SET_CURRENT_USER } from "../actionTypes/auth";

const logOut = () => ({
  type: LOG_OUT_USER
});

export const setLoggedInUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

const logOutUser = () => dispatch => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch(logOut());
};

export default logOutUser;
