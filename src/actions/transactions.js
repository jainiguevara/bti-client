import request from '../api/request'

// actions
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS'
export const FETCH_TRANSACTIONS_FAILED = 'FETCH_TRANSACTIONS_FAILED'
export const POST_TRANSACTIONS_SUCCESS = 'POST_TRANSACTIONS_SUCCESS'
export const POST_TRANSACTIONS_FAILED = 'POST_TRANSACTIONS_FAILED'

// action creator
export const fetchTransactions = (tokens, bank, query = undefined) => (dispatch, getState) => {
  dispatch({ type: 'FETCH_TRANSACTIONS_REQUESTED' })
  debugger
  return request({
    url: query
      ? `post/${bank}?startDate=${query.startDate}&endDate=${query.endDate}` 
      : `post/${bank}`,
    method: 'GET',
    token: tokens[0].token
  }).then((res, error) => {
    if (error) {
      throw new Error(error)
    }
    dispatch({ type: FETCH_TRANSACTIONS_SUCCESS, res })
    return res
  }).catch(error => {
    dispatch({ type: FETCH_TRANSACTIONS_FAILED, error })
  })
}

export const postTransactions = ({bank, data, user}) => async (dispatch, getState) => {
  dispatch({ type: 'POST_TRANSACTIONS_REQUESTED' })
  const { _id, tokens } = user
  return request({
    url: `post/${bank}`,
    body: {
      data,
      userId : _id
    },
    token: tokens[0].token
  }).then((res, error) => {
    if (error) {
      throw new Error(error)
    }
    dispatch({ type: POST_TRANSACTIONS_SUCCESS, res })
    return res
  }).catch(error => {
    dispatch({ type: POST_TRANSACTIONS_FAILED, error })
  })
}
