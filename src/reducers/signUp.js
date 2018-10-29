import * as types from "../actionTypes/SignUp";
import initialState from "../store/initialState";

export default function reducer(state = initialState.auth.signup, action) {
  switch (action.type) {
    case types.SIGN_UP_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
