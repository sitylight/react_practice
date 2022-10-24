import {ADD_PERSON} from '../constant'

const init = [];
export default function personReducer(preState = init, action) {
  const { type, data } = action;
  console.log('person action: ', action)
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState;
  }
}
