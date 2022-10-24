import {INCREASE, DECREASE} from '../constant'


export const countIncrease = data => ( {type: INCREASE, data} )

export const countDecrease = data => ( {type: DECREASE, data} )

export const countInCreaseAsync = (data, time) => {
  // redux 异步绑定store dispatch 方法
  return (dispatch) => {
    setTimeout(() => {
      dispatch(countIncrease(data))
    }, time);
  }
}