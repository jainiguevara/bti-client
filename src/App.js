import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import io from 'socket.io-client'

// const socket = io(process.env.REACT_APP_API_URL)

class App extends Component {
  componentDidMount() {
    // console.log()
    // socket.on('connect', data => {
    //   this.setState({ data })
    //   console.log('Conynected to server.')
    // })
    // socket.on('disconnect', data => {
    //   console.log('Disconnected from server.')
    // })
    // socket.on('initAPI', data => {
    //   console.log('ini API', data)
    // })
  }
  componentWillUnmount() {
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
