import React, { Component, PropTypes } from 'react'
import Head from './component/Head'
import Main from './component/Main'
import Foot from './component/Foot'

let index = 0
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    
    render() {
        return (
            <div>
                <Head addTodo={this.addTodo} />
                <Main list={this.state.list} toggle={this.toggle} />
                <Foot />
            </div>
        )
    }

    addTodo = text => {
        
        let { list } = this.state
        list.push({
            text,
            completed: false,
            index: index++
        })
        this.setState({
            list
        })
    }

    toggle = id => {
        let { list } = this.state
        debugger
        list.map(item =>{
            if( item.index === id ){
                item.completed = !item.completed
            }
        })
        this.setState({
            list
        })
    }
}

App.propTypes = {

}