import { applyMiddleware, createStore } from 'redux'; //  Main Redux library
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers'; //  List of Reducers we created

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
