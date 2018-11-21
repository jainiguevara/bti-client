import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_FAILED } from './../actions/transactions'

const initialState = { }

export default (state = initialState, action) => {
  const {payload, error } = action
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {
        ...state,
        payload,
      }
    case FETCH_TRANSACTIONS_FAILED:
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}