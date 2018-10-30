import * as types from "../actionTypes/SignIn";
import initialState from "../store/initialState";

export default function reducer(state = initialState.auth.signin, action) {
  switch (action.type) {
    case types.SIGN_IN_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
}
