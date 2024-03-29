import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
// import App from './components/App/App';
import Layout from './components/Layout';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
