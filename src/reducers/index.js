import { combineReducers } from "redux";
import auth from "./auth";
import rides from "./rides";
import rideRequest from "./createRides";

const rootReducer = combineReducers({
  auth,
  rides,
  rideRequest
});

export default rootReducer;
