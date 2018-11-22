import React from 'react'
import { connect } from 'react-redux'

import { logoutUser } from './../actions/user'
import Login from './../containers/Login'
import { isLoggedIn } from './../selectors/user'

const LoginGate = props => {
  const { isLoggedIn, logoutUser, user: { tokens }, children } = props
  debugger
  if (isLoggedIn) {
    return children
  } else {
    if (tokens.length !== 0) {
      logoutUser(tokens)
    }
    return <Login />
  }
}

const mapStateToProps = state => {
  return {
    user : state.user,
    isLoggedIn: isLoggedIn(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: payload => {
      dispatch(logoutUser(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginGate)
