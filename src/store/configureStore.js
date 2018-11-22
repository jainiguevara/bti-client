import compose from 'lodash/fp/compose'
import { createStore, applyMiddleware, } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'user', 'transactions', 'query' ],
  // blacklist: [ 'user', 'transactions' ]
}

const initialState = {}

const configureStore = initialState => {
  const persistedReducer = persistReducer(persistConfig, reducers)

  const middlewares = []
  const enhancers = []

  middlewares.push(thunk)
  enhancers.push(applyMiddleware(...middlewares))
  if (process.env.REACT_APP_DEV === 1 || process.env.REACT_APP_DEV) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  const enhancer = compose(...enhancers)

  const newStore = createStore(persistedReducer, initialState, enhancer)
  return newStore
}

const store = configureStore(initialState)
const persistor = persistStore(store)

export { store, persistor }