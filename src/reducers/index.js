import { combineReducers } from "redux";
import auth from "./auth";
import rides, { requestReducer } from "./rides";
import rideRequest from "./createRides";

const rootReducer = combineReducers({
  auth,
  rides,
  // ride: oneRideReducer,
  requests: requestReducer,
  rideRequest
});

export default rootReducer;
