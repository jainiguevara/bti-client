const initialState = {
  _id: undefined,
  email: undefined,
  exp: 0
}

export default (state = initialState, action) => {
  const user = action.user
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, user)
    case 'LOGIN_FAILED':
      return action.error
    case 'FETCH_USER':
      return Object.assign({}, state, user)
    case 'FETCH_USER_SUCCESS':
      return {...user }
    case 'FETCH_USER_FAILED':
      return action.error
    default:
      return { ...state }
  }
}