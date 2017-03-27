import React, { Component, PropTypes } from 'react';

class Head extends Component {
    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text" ref="todoInput" />
                <button type="submit">add</button>
            </form>
        )
    }
    submit = e => {
        e.preventDefault()
        let text = this.refs.todoInput.value.trim()
        if(text) {
            this.props.addTodo(text)
            this.refs.todoInput.value = ''
        }
    }

}

Head.propTypes = {

}

export default Head;