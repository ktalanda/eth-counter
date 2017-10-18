/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor (props) {
    super(props)
    props.init()
  }

  render () {
    return (
      <div style={containerStyle}>
        <button onClick={this.props.increment} style={buttonStyle}>
          INCREMENT
        </button>
        <br />
        <h1>
          {this.props.counter}
        </h1>
      </div>
    )
  }
}

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
