export const changeCounter = (newCounter) => {
  return { type: 'SET_COUNTER', newCounter }
}

export const changeBlockInfo = (newBlockInfo) => {
  return { type: 'SET_BLOCK_INFO', newBlockInfo }
}
