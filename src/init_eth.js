import Web3 from 'web3'

window.addEventListener('load', () => {
  if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.web3Provider = new window.web3.providers.HttpProvider('http://localhost:8545')
    window.web3 = new Web3(window.web3Provider)
  }
})
