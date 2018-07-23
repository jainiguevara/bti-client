import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import AppRouter from './routers/AppRouter'
import configureStore from './stores/configureStore'


const store = configureStore()

const AppWrapper = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))
registerServiceWorker()
