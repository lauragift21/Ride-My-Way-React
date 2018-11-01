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

const getRides = () => dispatch => {
  dispatch(fetchRidesLoading(true));
  const { token } = localStorage;
  axios
    .get(`${__API__}/api/v1/rides`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      dispatch(fetchRidesLoading(false));
      dispatch(fetchRidesSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchRidesLoading(false));
      if (error.response) {
        return dispatch(fetchRidesError(error));
      }
      return dispatch(
        fetchRidesError({
          error: { message: "Server unavailable at the moment" }
        })
      );
    });
};

export default getRides;
