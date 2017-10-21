import Web3 from 'web3'
import contract from 'truffle-contract'

import SimpleCounterContract from '../build/contracts/SimpleCounter.json'

export const init = () => {
  return Promise.resolve().then(() => {
    if (typeof window.web3 === 'undefined') throw Error('error')
    window.web3 = new Web3(window.web3.currentProvider)
    return true
  })
}

export const getCounter = () => {
  return deployCounter()
    .then(instance => instance.get())
}

export const incrementCounter = () => {
  let _account
  return getFirstAccount()
    .then(account => {
      _account = account
      return deployCounter()
    }).then(instance => instance.increment({ from: _account }))
}

const getFirstAccount = () => {
  return new Promise((resolve, reject) => {
    return window.web3.eth.getAccounts((error, accounts) => {
      if (error) reject(error)
      resolve(accounts)
    })
  }).then(accounts => accounts[0])
}

const deployCounter = () => {
  const simpleCounter = contract(SimpleCounterContract)
  simpleCounter.setProvider(window.web3.currentProvider)
  return simpleCounter.deployed()
}
