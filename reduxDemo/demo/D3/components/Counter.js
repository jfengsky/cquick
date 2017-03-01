import React, { Component, ProTypes} from 'react'

export default class Counter extends Component {
    render(){
        const {value, onIncrement, onDecrement} = this.props
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button>async add</button>
            </div>
        )
    }
}