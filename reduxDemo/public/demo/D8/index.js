import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux'
import reducer from './reducers'
import App from './components/App'

// const store = createStore(reducer)


const history = createHistory()

// const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  })
)

render(
    <Provider store={store}>
        <Router history={history} >
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
