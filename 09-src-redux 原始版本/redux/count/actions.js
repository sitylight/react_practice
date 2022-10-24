import {INCREASE, DECREASE} from './constant'


export const countIncrease = data => ( {type: INCREASE, data} )

export const countDecrease = data => ( {type: DECREASE, data} )

export const countInCreaseAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(countIncrease(data))
    }, time);
  }
}