import React from 'react'
import { connect } from 'react-redux'
// import loadable from 'loadable-components'

import { isLoggedIn } from './../selectors/user'
import Login  from './../containers/Login'

const LoginGate = (props) => {
  return isLoggedIn(props.user) ? props.children : <Login />
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(LoginGate)
