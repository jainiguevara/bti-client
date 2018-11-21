import { combineReducers } from 'redux'
import transactions from './../reducers/transactions'
import user from './../reducers/user'

export default combineReducers({
   transactions,
   user
})