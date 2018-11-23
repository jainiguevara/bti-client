import request from './../api/request'

// actions
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'
export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

// action creators
export const submitLogin = ({ email, password }) => async (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUESTED })
  return request({
    url: 'user/login',
    body: { email, password },
  }).then((res, error) => {
    if (error) {
      throw new Error(error)
    } 
    dispatch({ type: LOGIN_SUCCESS, user: res })
    return res
  }).catch(error => {
    dispatch({ type: LOGIN_FAILED, error })
  })
}

export const logoutUser = ({ token }) => async (dispatch, getState) => {
  debugger
  dispatch({ type: LOGOUT_REQUESTED })
    return request({
      url: 'user/me/token',
      token
    }).then((res, error) => {
      if (error) {
        throw new Error(error)
      }
      dispatch({ type: LOGOUT_SUCCESS })
      return res
    }).catch(error => {
      if (error.details.name === 'TokenExpiredError') {
        dispatch({ type: LOGOUT_SUCCESS })
      } else {
        dispatch({ type: LOGOUT_FAILED, error })
      }
  })
}

export const fetchUser = (id, dispatch) => {
  dispatch(FETCH_USER_REQUESTED())
  return request({
    url: `user/me/${id}`,
    method: 'GET'
  }).then((res, error) => {
    if (error) {
      throw new Error(error)
    }
    dispatch(FETCH_USER_SUCCESS(res))
    return Promise.resolve(res.user)
  }).catch(e => {
    dispatch(FETCH_USER_FAILED(e))
    return Promise.reject(e)
  })
}

// export const LOGOUT_REQUESTED = () => ({ type: 'LOGOUT_REQUESTED' })
// export const LOGOUT_SUCCESS = () => ({ type: 'LOGOUT_SUCCESS' })
// export const LOGOUT_FAILED = () => ({ type: 'LOGOUT_FAILED' })
// export const FETCH_USER_REQUESTED = () => ({ type: 'FETCH_USER_REQUESTED'})
// export const FETCH_USER_SUCCESS = (user) => ({ type: 'FETCH_USER_SUCCESS', user })
// export const FETCH_USER = () => ({ type: 'FETCH_USER' })
// export const FETCH_USER_FAILED = (error) => ({ 
//   type: 'FETCH_USER_FAILED',
//   error 
// })