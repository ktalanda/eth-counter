const initialState = {
  transactionNumber: 0
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRANSACTION_NUMBER':
      return { transactionNumber: action.newTransactionNumber }
    default:
      return state
  }
}
