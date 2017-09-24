import React from 'react'
import PropTypes from 'prop-types';

const App = (props) => (
    <div style={containerStyle}>
        <button
            onClick={props.buy}
            style={buttonStyle}>
            BUY
        </button>
    </div>
);

App.propTypes = {
    buy: PropTypes.func.isRequired
};

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
};

const buttonStyle = {
    width: 200,
    height: 200,
    fontSize: 20
};

export default App
