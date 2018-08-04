import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../index.css'
import App from '../App'
import Dashboard from './../components/dashboard'
import Login from './../containers/Login'
import Main from './../containers/Main'

const NotFound = () => {
  return (
    <div className='App'>
      <p className='App-intro'>404!</p>
    </div>
  )
}

const AppRouter = () => (
  <Main>
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Main>
)

export default AppRouter