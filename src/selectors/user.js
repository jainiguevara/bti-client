import moment from 'moment'

export const isLoggedIn = ({ exp }) => {
  return exp !== 0 && exp > moment().unix()
}