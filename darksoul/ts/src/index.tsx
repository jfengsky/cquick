import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducer'

interface ITStore {

}

const store = createStore(reducers)

render(
  <div>
    root
  </div>,
  document.getElementById('root')
)