import { connect } from 'react-redux'
import App from './AppComponent'
import {
  init as initContract,
  getCounter as getCounterContract,
  incrementCounter as incrementCounterContract
} from '../contracts'
import {
  getLastBlock
} from '../blockinfo'

import {
  changeCounter as changeCounterAction,
  changeBlockInfo as changeBlockInfoAction
} from './actions'

export const mapStateToProps = (state) => ({
  counter: state.app.counter,
  blockInfo: state.app.blockinfo
})

export const mapDispatchToProps = (dispatch) => ({
  init: () => {
    initContract()
      .then(_ => getCounterContract())
      .then(parseInt)
      .then(counter => dispatch(changeCounterAction(counter)))
      .then(_ => getLastBlock())
      .then(block => dispatch(changeBlockInfoAction(block)))
  },
  increment: () => {
    incrementCounterContract()
      .then(_ => window.alert('Success! Wait for mining and reload.'))
  },
  reload: () => {
    getCounterContract()
      .then(counter => dispatch(changeCounterAction(parseInt(counter))))
      .then(_ => getLastBlock())
      .then(block => dispatch(changeBlockInfoAction(block)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
