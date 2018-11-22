import React from 'react'
import { Route } from 'react-router-dom'
import { isLoggedIn } from './../selectors/user'
import { connect } from 'react-redux'


class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  render() {
    const { component: Component, user, ...rest } = this.props
    return (
      <Route
        {...rest}
        render = { 
          props => <Component {...props} />
        }
      />
    )
  }
} 

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoggedIn
  }
}

export default connect(mapStateToProps)(PrivateRoute)