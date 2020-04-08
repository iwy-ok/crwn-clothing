import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//gets both a root reducer -> return value of apply
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;