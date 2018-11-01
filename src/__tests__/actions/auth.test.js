import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import logOutUser, { setLoggedInUser } from "../../actions/auth";
import * as types from "../../actionTypes/auth";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("auth action test", () => {
  describe("logOutUser", () => {
    it("clears user data from localStorage", () => {
      localStorage.setItem("user", { name: "the user" });

      const store = mockStore({});
      store.dispatch(logOutUser());

      expect(localStorage.getItem("user")).toEqual(null);
    });
  });
  describe("setLoggedInUser", () => {
    it("calls SET_CURRENT_USER", () => {
      const user = { id: 1, name: "some user" };
      const store = mockStore({ user: {} });
      store.dispatch(setLoggedInUser(user));

      expect(store.getActions()).toEqual([
        {
          type: types.SET_CURRENT_USER,
          payload: { id: 1, name: "some user" }
        }
      ]);
    });
  });
});
