import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import signUp from "../../actions/SignUp";
import * as types from "../../actionTypes/SignUp";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("sign up actions", () => {
  afterEach(() => {
    moxios.reset();
  });
  describe("signUp", () => {
    it("dispatches SIGN_UP_SUCCESS after authentication", () => {
      moxios.onPost(`${__API__}/api/v1/auth/signup`).reply(200, {
        user: {
          id: 1,
          token: "the.user.token"
        }
      });

      const expectedActions = [
        {
          type: types.SIGN_UP_LOADING,
          payload: true
        },
        {
          type: types.SIGN_UP_LOADING,
          payload: false
        },
        {
          type: types.SIGN_UP_SUCCESS,
          payload: {
            user: {
              id: 1,
              token: "the.user.token"
            }
          }
        }
      ];

      const store = mockStore({ auth: {} });
      return store.dispatch(signUp("")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("dispatches SIGN_IN_FAILURE if authentication fails", () => {
      moxios.onPost(`${__API__}/api/v1/auth/signup`).reply(500, {
        error: {
          message: "some server error"
        }
      });

      const expectedActions = [
        {
          type: types.SIGN_UP_LOADING,
          payload: true
        },
        {
          type: types.SIGN_UP_LOADING,
          payload: false
        },
        {
          type: types.SIGN_UP_ERROR,
          payload: {
            error: {
              message: "some server error"
            }
          }
        }
      ];

      const store = mockStore({ auth: {} });
      return store.dispatch(signUp("")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
