import axios from "axios";
import * as types from "../actionTypes/rides";

const fetchRidesLoading = payload => ({
  type: types.FETCH_RIDES_LOADING,
  payload
});

const fetchRidesSuccess = payload => ({
  type: types.FETCH_RIDES_SUCCESS,
  payload
});

const fetchRidesError = payload => ({
  type: types.FETCH_RIDES_ERROR,
  payload
});

const getRideLoading = payload => ({
  type: types.GET_RIDE_LOADING,
  payload
});

const getRideSuccess = payload => ({
  type: types.GET_RIDE_SUCCESS,
  payload
});

const getRideError = payload => ({
  type: types.GET_RIDE_ERROR,
  payload
});

const fetchRideRequestLoading = payload => ({
  type: types.RIDE_REQUEST_LOADING,
  payload
});

const fetchRideRequestSuccess = payload => ({
  type: types.RIDE_REQUEST_SUCCESS,
  payload
});

const fetchRideRequestError = payload => ({
  type: types.RIDE_REQUEST_ERROR,
  payload
});

/**
 * @description FETCH A SINGLE RIDE
 * @returns {object}
 */
export const getSingleRide = rideId => dispatch => {
  dispatch(getRideLoading(true));
  const { token } = localStorage;
  return axios
    .get(`${__API__}/api/v1/rides/${rideId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      dispatch(getRideLoading(false));
      dispatch(getRideSuccess(response.data.ride));
    })
    .catch(error => {
      dispatch(getRideLoading(false));
      if (error.response) {
        return dispatch(getRideError(error.response.data));
      }
      return dispatch(
        getRideError({
          error: { message: "Server unavailable at the moment" }
        })
      );
    });
};

/**
 * @description MAKE RIDE REQUEST
 * @returns {object}
 */
export const requestRides = rideId => dispatch => {
  dispatch(fetchRideRequestLoading(true));
  const { token } = localStorage;
  return axios
    .post(
      `${__API__}/api/v1/rides/${rideId}/requests`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      dispatch(fetchRideRequestLoading(false));
      dispatch(fetchRideRequestSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchRideRequestLoading(false));
      if (error.response) {
        return dispatch(fetchRideRequestError(error.response));
      }
      return dispatch(
        fetchRideRequestError({
          error: { message: "Server unavailable at the moment" }
        })
      );
    });
};

/**
 * @description FETCH ALL RIDES
 * @returns {object}
 */
const getRides = () => dispatch => {
  dispatch(fetchRidesLoading(true));
  const { token } = localStorage;
  return axios
    .get(`${__API__}/api/v1/rides`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      dispatch(fetchRidesLoading(false));
      dispatch(fetchRidesSuccess(response.data.rides));
    })
    .catch(error => {
      dispatch(fetchRidesLoading(false));
      if (error.response) {
        return dispatch(fetchRidesError(error.response));
      }
      return dispatch(
        fetchRidesError({
          error: { message: "Server unavailable at the moment" }
        })
      );
    });
};

export default getRides;
