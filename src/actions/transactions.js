import request from '../api/request'

export const fetchTransactions = (tokens, bank) => {
  const response =  request({
    url: `post/${bank}`,
    method: 'GET',
    token: tokens[0].token
  }).then((res, error) => {
    return res
  }).catch(e => {
    return e
  })
  return FETCH_TRANSACTIONS(response)
}


export const FETCH_TRANSACTIONS = response => ({ type: 'FETCH_TRANSACTIONS', payload: response })