import { connect } from 'react-redux'
import request from './../api/request'

// ACTION CREATORS
export const submitLogin = ({ email, password }, dispatch) => {
  dispatch(LOGIN_REQUESTED())
    return request({ 
      url: 'user/login',
      body: { email, password }
    }).then((res, error) => {
      if (error) {
        throw new Error(error)
      } 
      dispatch(LOGIN_SUCCESS(res))
      localStorage.setItem('token', res.tokens[0].token)
      localStorage.setItem('exp', res.exp)
      return Promise.resolve(res)
    }).catch(e => {
      dispatch(LOGIN_FAILED(e))
      return Promise.reject(e)
  })
}

export const logoutUser = ({ token }, dispatch) => {
  dispatch(LOGOUT_REQUESTED())
    return request({
      method: 'DELETE', 
      url: 'user/me/token',
      token
    }).then((res, error) => {
      if (error) {
        throw new Error(error)
      } 
      dispatch(LOGIN_SUCCESS())
      return Promise.resolve()
    }).catch(e => {
      dispatch(LOGOUT_FAILED(e))
      return Promise.reject(e)
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

// ACTIONS
export const LOGIN_REQUESTED = () => ({ type: 'LOGIN_REQUESTED' })
export const LOGIN_SUCCESS = (user) => ({
  type: 'LOGIN_SUCCESS',
  user 
})
export const LOGIN_FAILED = (error) => ({
  type: 'LOGIN_FAILED',
  error
})
export const LOGOUT_REQUESTED = () => ({ type: 'LOGOUT_REQUESTED' })
export const LOGOUT_SUCCESS = () => ({ type: 'LOGOUT_SUCCESS' })
export const LOGOUT_FAILED = () => ({ type: 'LOGOUT_FAILED' })
export const FETCH_USER_REQUESTED = () => ({ type: 'FETCH_USER_REQUESTED'})
export const FETCH_USER_SUCCESS = (user) => ({ type: 'FETCH_USER_SUCCESS', user })
export const FETCH_USER = () => ({ type: 'FETCH_USER' })
export const FETCH_USER_FAILED = (error) => ({ 
  type: 'FETCH_USER_FAILED',
  error 
})