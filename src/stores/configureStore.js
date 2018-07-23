import { createStore, combineReducers }  from 'redux'
import counterReducer from '../reducers/counter'

export default () => {
  const store = createStore(combineReducers({
    counter: counterReducer
  }))
  return store
}