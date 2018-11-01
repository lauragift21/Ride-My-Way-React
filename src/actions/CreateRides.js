import axios from "axios";
import * as types from "../actionTypes/CreateRides";

const rideRequestLoading = payload => ({
  type: types.RIDE_REQUEST_LOADING,
  payload
});

const rideRequestSuccess = payload => ({
  type: types.RIDE_REQUEST_SUCCESS,
  payload
});

const rideRequestError = payload => ({
  type: types.RIDE_REQUEST_ERROR,
  payload
});

const rideRequest = (location, destination, departure, seats) => dispatch => {
  dispatch(rideRequestLoading(true));
  const { token } = localStorage;
  return axios
    .post(
      `${__API__}/api/v1/users/rides`,
      {
        location,
        destination,
        departure,
        seats
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      dispatch(rideRequestLoading(false));
      dispatch(rideRequestSuccess(response.data.ride));
    })
    .catch(error => {
      if (error.response) {
        return dispatch(rideRequestError(error));
      }
      return dispatch(
        rideRequestError({
          error: { message: "Server unavailable at the moment" }
        })
      );
    });
};

export default rideRequest;
