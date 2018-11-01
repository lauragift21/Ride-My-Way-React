import initialState from "../store/initialState";
import * as types from "../actionTypes/CreateRides";

export default function reducer(state = initialState.rideRequest, action) {
  switch (action.type) {
    case types.RIDE_REQUEST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.RIDE_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case types.RIDE_REQUEST_ERROR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
}
