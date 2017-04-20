import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import App from './App'

// 创建全局唯一的store
const store = createStore(reducer)

// 要用 Provider 包裹起来
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)