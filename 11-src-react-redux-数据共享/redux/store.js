import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/count.js';
import personReducer from './reducers/person.js';
import thunk from 'redux-thunk'; // 用于支持异步函数

// 按照key-value的object 保存共享数据到redux， 再通过key 在容器mapStateToProps 获取数据

const allReducers = combineReducers({
  rdx_count: countReducer,
  rdx_persons: personReducer,
});
export default legacy_createStore(allReducers, applyMiddleware(thunk));
