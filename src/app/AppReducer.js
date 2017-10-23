const initialState = {
  counter: 0,
  blockinfo: {
    number: 0,
    hash: '',
    gasUsed: 0
  }
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTER':
      return {
        ...state,
        counter: action.newCounter
      }
    case 'SET_BLOCK_INFO':
      return {
        ...state,
        blockinfo: action.newBlockInfo
      }
    default:
      return state
  }
}
