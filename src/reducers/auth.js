import isEmpty from "lodash/isEmpty";
import { SET_CURRENT_USER, LOG_OUT_USER } from "../actionTypes/auth";
import SIGN_IN_SUCCESS from "../actions/SignUp";
import SIGN_UP_SUCCESS from "../actions/SignIn";
import initialState from "../store/initialState";

// reducers
import signinReducer from "./signIn";
import signupReducer from "./signUp";

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case LOG_OUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true
      };
    default:
      return {
        ...state,
        signin: signinReducer(state.signin, action),
        signup: signupReducer(state.signup, action)
      };
  }
};

export default auth;
