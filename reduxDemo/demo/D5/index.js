import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

let state = 0
let isFixed = false

const add = e => {
    state++
    render(state)
}

const reduce = e => {
    state--
    render(state)
}

const fixed = e => {
    if(e.target.checked){
        isFixed = true
    } else {
        isFixed = false
    }
    render(state)
}

const render = state => {
    if(isFixed) {
        state = state + '.00'
    }
    ReactDOM.render(
        <App state={state} onAdd={add} onReduce={reduce} fixed={fixed} />,
        document.getElementById('root')
    )
}
render(state)