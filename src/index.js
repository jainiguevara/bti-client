import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import LoginGate from './store/LoginGate'
import { configureStore } from './store/configureStore'

const store = configureStore()

const AppWrapper = (
  <Provider store={store}>
    <LoginGate>
      <App />
    </LoginGate>
  </Provider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))
registerServiceWorker()
