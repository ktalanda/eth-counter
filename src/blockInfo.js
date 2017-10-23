export const getLastBlock = () => {
  return getBlockNumber()
    .then(getBlock)
}

const getBlockNumber = () => {
  return new Promise((resolve, reject) => {
    return window.web3.eth.getBlockNumber((error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
}

const getBlock = (number) => {
  return new Promise((resolve, reject) => {
    return window.web3.eth.getBlock(number, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
}
