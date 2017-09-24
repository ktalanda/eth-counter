import './init_eth'
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './app/AppContainer'
import { combineReducers } from 'redux';
import app from './app/AppReducer';

const store = createStore(combineReducers({app}));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
