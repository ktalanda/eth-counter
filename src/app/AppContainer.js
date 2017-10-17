import App from './AppComponent'
import { connect } from 'react-redux'
import SimpleStorageContract from '../../build/contracts/SimpleStorage.json'
import contract from 'truffle-contract'
import { changeCounter } from './actions'

const simpleStorage = contract(SimpleStorageContract)
simpleStorage.setProvider(window.web3.currentProvider)

export const mapStateToProps = (state) => {
  return {
    counter: state.app.counter
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      simpleStorage.deployed()
        .then(instance => instance.get())
        .then(counter => dispatch(changeCounter(parseInt(counter))))
    },
    increment: () => {
      window.web3.eth.getAccounts((error, accounts) => {
        if (error) console.log(error)
        simpleStorage.deployed()
          .then(instance => instance.increment({ from: accounts[0] }))
          .then(() => simpleStorage.deployed())
          .then(instance => instance.get())
          .then(counter => dispatch(changeCounter(parseInt(counter))))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
