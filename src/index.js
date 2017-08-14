import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import clabbrs from './data/clabbrs';

import App from './components';
import reducers from './reducers';

import './styles';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers, {
  clabbrs: clabbrs
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
