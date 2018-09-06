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
    this.state = {
      ...JSON.parse(localStorage.getItem('user'))
    }
    if (isLoggedIn({ exp: this.state.exp })) {
      this.state = {
        ...this.state,
        isLoggedIn: true
      }
    } else {
      this.state = {
        ...this.state,
        isLoggedIn: false
      }
    }
  }

  componentDidMount() {
    if (!isLoggedIn({ exp: this.state.exp })) {
      logoutUser({ token: this.state.tokens[0].token }, this.props.dispatch)
        .then(() => {
          this.setState({
            isLoggedIn: false
          })
        })
      localStorage.removeItem('user')
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