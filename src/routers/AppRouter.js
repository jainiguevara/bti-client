import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Dashboard from './../components/dashboard'
import Post from './../components/post'
import Login from './../containers/Login'
import Main from './../containers/Main'
import history from './../history'

const NotFound = () => {
  return (
    <div className='App'>
      <p className='App-intro'>404!</p>
    </div>
  )
}

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/post/:bank" component={Post} />
      <PrivateRoute path="/" component={Dashboard} />
    </Switch>
  </Router>
)



export default AppRouter