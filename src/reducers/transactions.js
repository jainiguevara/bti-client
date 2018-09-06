const initialState = { }

export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'FETCH_TRANSACTIONS':
      return {
        ...state,
        payload
      }
    default:
      return { ...state }
  }
}