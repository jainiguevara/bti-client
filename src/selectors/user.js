export const isLoggedIn = user => {
  return user.email !== '' ? true : false //api logic here
}