/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types'

const App = (props) => (
  <div style={containerStyle}>
    <button onClick={props.increment} style={buttonStyle}>
      INCREMENT
    </button>
    <div>
      {props.counter}
    </div>
  </div>
)

App.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired
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
