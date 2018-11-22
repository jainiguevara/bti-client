import { combineReducers } from 'redux'
import transactions from './../reducers/transactions'
import user from './../reducers/user'
import query from './../reducers/query'

export default combineReducers({
   transactions,
   user,
   query,
})