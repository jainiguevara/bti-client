export const submitLogin = (user) => {
  //API CALL

  //API CALL
  user = {
    email: user.email,
    // isLoggedIn: true
  }
 return {
   type: 'SUBMIT_LOGIN',
    user
  }
}

export const fetchUser = () => {
  //API CALL

  //API CALL
  const user = {
    email: 'jaini.guevara@gmail.com',
    token: 'test'
  }

  return {
    type: 'FETCH_USER',
    user
  }
}
