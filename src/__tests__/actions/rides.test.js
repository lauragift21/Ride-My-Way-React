import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getRides, { getSingleRide } from "../../actions/rides";
import * as types from "../../actionTypes/rides";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("load rides actions", () => {
  afterEach(() => {
    moxios.reset();
  });
  describe("getRides", () => {
    it("dispatches FETCH_RIDES_SUCCESS", () => {
      moxios.onGet(`${__API__}/api/v1/rides`).reply(200, {
        rides: [
          {
            id: 1,
            location: "lagos",
            destination: "Abuja"
          }
        ]
      });
      const expectedActions = [
        {
          type: types.FETCH_RIDES_LOADING,
          payload: true
        },
        {
          type: types.FETCH_RIDES_LOADING,
          payload: false
        },
        {
          type: types.FETCH_RIDES_SUCCESS,
          payload: [
            {
              id: 1,
              location: "lagos",
              destination: "Abuja"
            }
          ]
        }
      ];
      const store = mockStore({ rides: {} });
      return store.dispatch(getRides()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("dispatches FETCH_RIDES_ERROR", () => {
      moxios.onGet(`${__API__}/api/v1/rides`).networkError("server error");
      const store = mockStore({ rides: {} });
      return store.dispatch(getRides()).then(() => {
        const recievedActions = store.getActions();
        const failureAction = recievedActions.find(
          action => action.type === types.FETCH_RIDES_ERROR
        );
        expect(failureAction).toBeTruthy();
      });
    });
    it("dispatches GET_RIDE_ERROR", () => {
      moxios.onGet(`${__API__}/api/v1/rides/2`).networkError("server error");
      const store = mockStore({ ride: {} });
      return store.dispatch(getSingleRide()).then(() => {
        const recievedActions = store.getActions();
        const failureAction = recievedActions.find(
          action => action.type === types.GET_RIDE_ERROR
        );
        expect(failureAction).toBeTruthy();
      });
    });
  });
});
