import request from './../../api/request'

const reduerName = 'user'

const reducerName = 'user'
const createActionName = name => `app/${reducerName}/${name}`

const initialState = {
  UserName: '',
  token: '',
  tokenExpires: 0, 
}

export const isLoggedIn = state => ({
  isLoggedIn:
    state[reducerName].token &&
    state[reducerName].tokenExpires > Date.now(),
})