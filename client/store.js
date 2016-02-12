import config from 'config';
import thunkMiddleware from 'redux-thunk';
import logMiddleware from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const history = useRouterHistory(createHashHistory)({ queryKey: false });

const reduxRouterMiddleware = syncHistory(history);

const middlewares = [];
middlewares.push(reduxRouterMiddleware);
middlewares.push(thunkMiddleware);
if (config.dev.logActions) {
  middlewares.push(logMiddleware());
}
export const store = compose(
  applyMiddleware.apply(null, middlewares)
)(createStore)(reducer);
