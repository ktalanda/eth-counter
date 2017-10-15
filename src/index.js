/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import App from './app/AppContainer'
/* eslint-enable no-unused-vars */
import './init_eth'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import app from './app/AppReducer'

const store = createStore(combineReducers({ app }))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
