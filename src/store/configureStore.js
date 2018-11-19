import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import async from './../middleware/async'
import transactionsReducer from './../reducers/transactions'

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(
  persistConfig, 
  combineReducers({
    transactions: transactionsReducer
  })
)

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(async),
)
export const persistor = persistStore(store)
