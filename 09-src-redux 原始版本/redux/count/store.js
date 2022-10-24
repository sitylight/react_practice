import { legacy_createStore, applyMiddleware } from 'redux';

import countReducer from './reducer.js';
import thunk from 'redux-thunk';  // 用于支持异步函数

export default legacy_createStore(countReducer, applyMiddleware(thunk));
