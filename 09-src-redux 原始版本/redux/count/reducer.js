import {INCREASE, DECREASE} from './constant'

const init = 0;

export default function countReducer(preState = init, action) {
  console.log('call reducer: ', preState, action);
  const { type, data } = action;
  switch (type) {
    case INCREASE:
      console.log('increase: ', preState + data)
      return preState + data;
    case DECREASE:
      return preState - data;
    default:
      return preState;
  }
}
