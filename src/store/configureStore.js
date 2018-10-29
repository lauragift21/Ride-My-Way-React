import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const logger = createLogger({
  collapsed: true
});

const configureStore = () =>
  createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
        ? window.devToolsExtension()
        : f => f
    )
  );

export default configureStore;
