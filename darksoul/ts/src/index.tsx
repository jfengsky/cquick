import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, Store} from 'redux'
import { Provider } from 'react-redux'

// import { ITStore } from './interface'

import reducers from './reducer'
import App from './App'

const store:  Store<any> = createStore(reducers)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)