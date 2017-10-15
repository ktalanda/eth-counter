import App from './AppComponent'
import { connect } from 'react-redux'
import SampleContract from '../../build/contracts/MetaCoin.json'

export const mapStateToProps = (state) => {
  return { }
}

export const mapDispatchToProps = (dispatch) => {
  return { buy }
}

export const buy = () => {
  SampleContract.setProvider(window.web3.currentProvider)

  SampleContract.deployed().then((instance) => {
    console.log(instance)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
