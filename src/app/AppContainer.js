import App from './AppComponent'
import { connect } from 'react-redux'
import SimpleStorageContract from '../../build/contracts/SimpleStorage.json'
import contract from 'truffle-contract'

export const mapStateToProps = (state) => {
  return {}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      const simpleStorage = contract(SimpleStorageContract)
      simpleStorage.setProvider(window.web3.currentProvider)
      simpleStorage.deployed().then(instance => instance.get()).then(window.alert)
    },
    buy: () => {
      window.web3.eth.getAccounts((error, accounts) => {
        if (error) console.log(error)
        const simpleStorage = contract(SimpleStorageContract)
        simpleStorage.setProvider(window.web3.currentProvider)
        simpleStorage.deployed().then(instance => instance.add({ from: accounts[0] }))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
