import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>),
document.getElementById('root'))

/*
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers'

import App from './App'

const reducer = combineReducers({
  ...reducers
})

const store = createStore(reducers)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))
*/