import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

class AddTodo extends Component {
    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input type="text" ref="todoInput" />
                <button type="submit"> add </button>
            </form>
        );
    }
    addTodo = e => {
        let text = this.refs.todoInput.value.trim()
        if(text){
            this.props.dispatch({
                type: 'ADD_TODO',
                text
            })
            this.refs.todoInput.value = ''
        }
    }
}

AddTodo.propTypes = {

}
AddTodo = connect()(AddTodo)
export default AddTodo