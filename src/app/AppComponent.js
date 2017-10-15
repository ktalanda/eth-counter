/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types'

const App = (props) => (
  <div style={containerStyle}>
    <button onClick={props.buy} style={buttonStyle}>
      INCREMENT
    </button>
    <button onClick={props.init} style={buttonStyle}>
      READ COUNTER
    </button>
  </div>
)

App.propTypes = {
  init: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}

const buttonStyle = {
  width: 200,
  height: 200,
  fontSize: 20
}

export default App
