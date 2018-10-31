import React from 'react'
import { connect } from 'react-redux'
// import loadable from 'loadable-components'

import { isLoggedIn } from './../selectors/user'
import Login  from './../containers/Login'

const LoginGate = ({ isLoggedIn, children, dispatch }) => {
  console.log('LoginGate', isLoggedIn)
  return isLoggedIn() ? children : <Login />
}

const mapStateToProps = state => {
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(LoginGate)
