import Web3 from 'web3'
import contract from 'truffle-contract'

import SimpleStorageContract from '../build/contracts/SimpleStorage.json'

export const init = () => {
  return Promise.resolve().then(() => {
    if (typeof window.web3 === 'undefined') throw Error('error')
    window.web3 = new Web3(window.web3.currentProvider)
    return true
  })
}

export const getCounter = () => {
  return deploy()
    .then(instance => instance.get())
}

export const incrementCounter = () => {
  let _accounts
  return new Promise((resolve, reject) => {
    return window.web3.eth.getAccounts((error, accounts) => {
      if (error) reject(error)
      resolve(accounts)
    })
  }).then(accounts => {
    _accounts = accounts
    return deploy()
  }).then(instance => instance.increment({ from: _accounts[0] }))
}

const deploy = () => {
  const simpleStorage = contract(SimpleStorageContract)
  simpleStorage.setProvider(window.web3.currentProvider)
  return simpleStorage.deployed()
}
