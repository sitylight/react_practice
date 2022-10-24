const init = '';
export function textReducers(preState = init, action) {
  const { type, data } = action;
  console.log('seprate action: ', action)
  switch (type) {
    case 'split':
      return preState.concat('--').concat(data.split(','));
    default:
      return preState;
  }
}
