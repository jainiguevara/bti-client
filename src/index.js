import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { store , persistor } from './store/configureStore'
import Loading from './components/utility/Loading'

const AppWrapper = (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))
registerServiceWorker()
