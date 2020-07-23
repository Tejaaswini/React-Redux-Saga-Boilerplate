import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { logger } from 'redux-logger';

//Redux Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export default function configureStore(initialState={}) {
 return createStore(
  rootReducer,
   applyMiddleware(sagaMiddleware, logger)
 );
}