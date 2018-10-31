import React, { Component } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import AppRouter from './routers/AppRouter'
import LoginGate from './store/LoginGate'

class App extends Component {
  render() {
    return (
      <LoginGate>
        <AppRouter />
      </LoginGate>
    )
  }
}

export default App
