import { LOGIN_SUCCESS, LOGIN_FAILED, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED, LOGOUT_SUCCESS, LOGOUT_FAILED } from './../actions/user'

const initialState = {
  _id: undefined,
  email: undefined,
  exp: 0,
  tokens: [],
  error: {}
}

export default (state = initialState, action) => {
  const { user, error } = action
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, user)
    case LOGIN_FAILED:
      return Object.assign({}, state, error)
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, initialState)
    case LOGOUT_FAILED:
      return Object.assign({}, state, error)
    case FETCH_USER:
      return Object.assign({}, state, user)
    case FETCH_USER_SUCCESS:
      return  Object.assign({}, state, user)
    case FETCH_USER_FAILED:
      return Object.assign({}, state, error)
    default:
      return state
  }
}