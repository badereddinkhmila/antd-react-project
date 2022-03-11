import { applyMiddleware, compose, createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import rootSaga from './root.sagas';
import rootReducer from './rootReducer';
import { rootEpic } from './root.epics';

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();
const Middlewares = [sagaMiddleware, thunk, epicMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...Middlewares));

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);
export const persistor = persistStore(store);
