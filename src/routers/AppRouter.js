import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import '../index.css'
import App from '../App'
import Dashboard from '../components/Dashboard'
import Login from './../components/Login'

const NotFound = () => {
  return (
    <div className='App'>
      <p className='App-intro'>404!</p>
    </div>
  )
}

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter