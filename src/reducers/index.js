import { combineReducers } from "redux";
import auth from "./auth";
import rides, { oneRideReducer } from "./rides";
import rideRequest from "./createRides";

const rootReducer = combineReducers({
  auth,
  rides,
  ride: oneRideReducer,
  rideRequest
});

export default rootReducer;
