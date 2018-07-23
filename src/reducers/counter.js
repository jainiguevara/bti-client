const countReducerDefaultState = { count: 0 };

export default (state = countReducerDefaultState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return {
      count: state.count + 1
    }
  case 'GET':
    return state.count
  default:
    return state
  }
}