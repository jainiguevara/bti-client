import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './../selectors/user'
import { logoutUser, fetchUser } from './../actions/user'
import { connect } from 'react-redux'
import history from './../history'

let userData = {}

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
    if (isLoggedIn({ exp: localStorage.getItem('exp')} )) {
      this.state = {
        isLoggedIn: true
      }
    } else {
      this.state = {
        isLoggedIn: false
      }
    }
  }

  componentDidMount() {
    if (!isLoggedIn({ exp: localStorage.getItem('exp')} )) {
      logoutUser({ token: localStorage.getItem('token') }, this.props.dispatch)
        .then(() => {
          localStorage.removeItem('exp')
          localStorage.removeItem('token')
          this.setState({
            isLoggedIn: false
          })
        })
    }
  }

  render() {
    const { component: Component, user, ...rest } = this.props
    return (
      <Route
        {...rest}
        render = { props => 
            this.state.isLoggedIn ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    )
  }
} 

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(PrivateRoute)