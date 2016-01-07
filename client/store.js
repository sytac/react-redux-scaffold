import thunkMiddleware from 'redux-thunk';
import logMiddleware from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routeReducer } from 'redux-simple-router';

import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

export const store = compose(
  applyMiddleware(
    thunkMiddleware,
    logMiddleware()
  )
)(createStore)(reducer);
