import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

/**
 * @description The basic idea of a store is that it is a housing
 * component of all the state in the application
 * the state of the whole application lives inside the store.
 */
const logger = createLogger({
  collapsed: true,
});

const configureStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default configureStore;
