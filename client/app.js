import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';

import { store } from './store';
import routes from './routes';

const history = createHistory({
  queryKey: false
});

syncReduxAndRouter(history, store);

// Needed befor react 1.0 release
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app')
);
