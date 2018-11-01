import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import rideRequest from "../../actions/CreateRides";
import * as types from "../../actionTypes/CreateRides";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("load create ride actions", () => {
  afterEach(() => {
    moxios.reset();
  });
  describe("rideRequest", () => {
    it("dispatches RIDE_REQUEST_SUCCESS", () => {
      moxios.onPost(`${__API__}/api/v1/users/rides`).reply(201, {
        ride: { location: "Lagos" }
      });
      const expectedActions = [
        {
          type: types.RIDE_REQUEST_LOADING,
          payload: true
        },
        {
          type: types.RIDE_REQUEST_LOADING,
          payload: false
        },
        {
          type: types.RIDE_REQUEST_SUCCESS,
          payload: {
            location: "Lagos"
          }
        }
      ];
      const store = mockStore({ rideRequest: {} });
      return store.dispatch(rideRequest()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("dispatches RIDE_REQUEST_ERROR", () => {
      moxios
        .onPost(`${__API__}/api/v1/users/rides`)
        .networkError("server error");
      const store = mockStore({ rideRequest: {} });
      return store.dispatch(rideRequest()).then(() => {
        const recievedActions = store.getActions();
        const failureAction = recievedActions.find(
          action => action.type === types.RIDE_REQUEST_ERROR
        );
        expect(failureAction).toBeTruthy();
      });
    });
  });
});
