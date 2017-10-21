import { connect } from 'react-redux'
import App from './AppComponent'
import {
  init as initContract,
  getCounter as getCounterContract,
  incrementCounter as incrementCounterContract
} from '../contracts'

import { changeCounter as changeCounterAction } from './actions'

export const mapStateToProps = (state) => ({ counter: state.app.counter })

export const mapDispatchToProps = (dispatch) => ({
  init: () => {
    initContract()
      .then(_ => getCounterContract())
      .then(counter => dispatch(changeCounterAction(parseInt(counter))))
  },
  increment: () => {
    incrementCounterContract()
      .then(_ => window.alert('Success! Wait for mining and reload.'))
  },
  reload: () => {
    getCounterContract()
      .then(counter => dispatch(changeCounterAction(parseInt(counter))))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
