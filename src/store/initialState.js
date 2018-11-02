const initialState = {
  auth: {
    user: {},
    signin: {
      loading: false,
      error: ""
    },
    signup: {
      loading: false,
      error: ""
    },
    isAuthenticated: false
  },
  rides: {
    data: [],
    error: "",
    loading: false
  },
  ride: {
    data: {},
    error: "",
    loading: false
  },
  rideRequest: {
    data: {},
    error: "",
    loading: false
  }
};

export default initialState;
