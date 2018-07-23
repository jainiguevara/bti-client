const initialState = {
  forgotOpen : true
}

export default (state = initialState, action) => {
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