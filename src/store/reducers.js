import { combineReducers } from 'redux'
import transactions from './../reducers/transactions'

export default () => {
 return combineReducers({
   transactions
 }) 
}