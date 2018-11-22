import * as actions from './../actions/transactions'

const {
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
  POST_TRANSACTIONS_FAILED,
  POST_TRANSACTIONS_SUCCESS,
} = actions


const initialState = {
  data: [],
  error: {},
 }

export default (state = initialState, action) => {
  const { res, error } = action
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        data: res,
      }
    case FETCH_TRANSACTIONS_FAILED:
      return {
        ...state,
        error,
      }
    case POST_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        data: res
      }
    case POST_TRANSACTIONS_FAILED:
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}