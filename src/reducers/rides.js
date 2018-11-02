import initialState from "../store/initialState";
import * as types from "../actionTypes/rides";

export default function reducer(state = initialState.rides, action) {
  switch (action.type) {
    case types.FETCH_RIDES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.FETCH_RIDES_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case types.FETCH_RIDES_ERROR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
}

export const oneRideReducer = (state = initialState.ride, action) => {
  switch (action.payload) {
    case types.GET_RIDE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.GET_RIDE_SUCCESS:
      return {
        ...state,
        ride: action.payload
      };
    case types.GET_RIDE_ERROR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};
