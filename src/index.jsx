import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import './modules/theme/styles.css'

import reducers from './store/reducers'

import Home from './modules/home/containers/Home'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware()(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
, document.getElementById('root'))
