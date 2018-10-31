import moment from 'moment'

export const isLoggedIn = state => ({
  isLoggedIn:
    state[reducerName].token &&
    state[reducerName].tokenExpires > Date.now(),
})