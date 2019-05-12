import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware();
const reduxLogger = createLogger({ collapsed: true });

export function configureStore() {
  const middleware = applyMiddleware(sagaMiddleware, reduxLogger);
  const store = createStore(rootReducer, middleware);

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}