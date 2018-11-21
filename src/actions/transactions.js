import request from '../api/request'

// actions
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS'
export const FETCH_TRANSACTIONS_FAILED = 'FETCH_TRANSACTIONS_FAILED'

// action creator
export const fetchTransactions = (tokens, bank) => (dispatch, getState) => {
  return request({
    url: `post/${bank}`,
    method: 'GET',
    token: tokens[0].token
  }).then((res, error) => {
    if (error) {
      throw new Error(error)
    }
    dispatch({ type: FETCH_TRANSACTIONS, res })
    return res
  }).catch(error => {
    dispatch({ type: FETCH_TRANSACTIONS_FAILED, error })
  })
}
