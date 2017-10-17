const initialState = {
  counter: 0
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTER':
      return {
        counter: action.newCounter
      }
    default:
      return state
  }
}
