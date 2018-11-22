import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { store, persistor } from './store/configureStore'
import Loading from './components/utility/Loading'
import LoginGate from './store/LoginGate'
import Main from './containers/Main'

const AppWrapper = (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <BrowserRouter>
          <LoginGate>
            <Main>
                <App />
            </Main>
          </LoginGate>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))
registerServiceWorker()
