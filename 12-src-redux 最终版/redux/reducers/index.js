import { combineReducers } from 'redux';
import countReducer from './count';
import personReducer from './person';

// 按照key-value的object 保存共享数据到redux， 再通过key 在容器mapStateToProps 获取数据

export default combineReducers({
  rdx_count: countReducer,
  rdx_persons: personReducer,
});
