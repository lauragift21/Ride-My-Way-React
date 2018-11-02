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

export const requestReducer = (state = initialState.requester, action) => {
  switch (action.payload) {
    case types.RIDE_REQUEST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.RIDE_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.payload
      };
    case types.RIDE_REQUEST_ERROR:
      return {
        error: ""
      };
    default:
      return state;
  }
};
