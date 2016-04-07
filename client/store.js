import config from 'config';
import thunkMiddleware from 'redux-thunk';
import logMiddleware from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

const history = useRouterHistory(createHashHistory)({ queryKey: false });


const middlewares = [];
// middlewares.push(reduxRouterMiddleware);
middlewares.push(thunkMiddleware);
if (config.dev.logActions) {
  middlewares.push(logMiddleware());
}
export const store = compose(
  applyMiddleware.apply(null, middlewares)
)(createStore)(reducer);

syncHistoryWithStore(history, store);
