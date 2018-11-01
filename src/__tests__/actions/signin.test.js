import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import signIn from "../../actions/SignIn";
import * as types from "../../actionTypes/SignIn";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("sign in actions", () => {
  afterEach(() => {
    moxios.reset();
  });
  describe("signIn", () => {
    it("dispatches SIGN_IN_SUCCESS after authentication", () => {
      moxios.onPost(`${__API__}/api/v1/auth/login`).reply(200, {
        user: {
          id: 1,
          token: "the.user.token"
        }
      });

      const expectedActions = [
        {
          type: types.SIGN_IN_LOADING,
          payload: true
        },
        {
          type: types.SIGN_IN_LOADING,
          payload: false
        },
        {
          type: types.SIGN_IN_SUCCESS,
          payload: {
            user: {
              id: 1,
              token: "the.user.token"
            }
          }
        }
      ];

      const store = mockStore({ auth: {} });
      return store.dispatch(signIn("")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("dispatches SIGN_IN_FAILURE if authentication fails", () => {
      moxios.onPost(`${__API__}/api/v1/auth/login`).reply(500, {
        error: {
          message: "some server error"
        }
      });

      const expectedActions = [
        {
          type: types.SIGN_IN_LOADING,
          payload: true
        },
        {
          type: types.SIGN_IN_LOADING,
          payload: false
        },
        {
          type: types.SIGN_IN_ERROR,
          payload: {
            error: {
              message: "some server error"
            }
          }
        }
      ];

      const store = mockStore({ auth: {} });
      return store.dispatch(signIn("")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
