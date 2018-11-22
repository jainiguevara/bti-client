import moment from 'moment'

export const isLoggedIn = state => { 
  const { exp, tokens } = state.user
  const isLoggedIn = tokens.length !== 0 && exp > moment().unix()
  return isLoggedIn
}