import { combineReducers } from "redux";
import auth from "./auth";
import signUp from "./signUp";
import signIn from "./signIn";

const rootReducer = combineReducers({
  auth,
  signUp,
  signIn
});

export default rootReducer;
