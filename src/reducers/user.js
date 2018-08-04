const initialState = {
  email: '',
  //isLoggedIn: false
}

export default (state = initialState, action) => {
  const user = action.user
  switch (action.type) {
    case 'SUBMIT_LOGIN':
      return user
    case 'FETCH_USER':
      return user
    default:
      return state
  }
}