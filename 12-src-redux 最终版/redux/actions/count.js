import {INCREASE, DECREASE} from '../constant'


export const increaseAction = data => ( {type: INCREASE, data} )

export const decreaseAction = data => ( {type: DECREASE, data} )

export const increaseAsyncAction = (data, time) => {
  // redux 异步绑定store dispatch 方法
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increaseAction(data))
    }, time);
  }
}