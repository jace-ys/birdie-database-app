import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import 'semantic-ui-css/semantic.min.css';
import './assets/stylesheets/index.css';
import App from './components/App';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
