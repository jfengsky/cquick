import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
    render() {
        let { list, filter } = this.props

        list = this.filter(list, filter)

        return (
            <ul>
                {
                    list && !!list.length && list.map(item => (
                        <li onClick={this.complete.bind(this,item)} style={{textDecoration: item.completed ? "line-through": ""}} key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
        );
    }
    complete = e => {
        this.props.complete({id: e.id})
    }
    filter = (list, type) => {
        let tempList = []
        if(type === 'SHOW_TODO'){
            tempList = list.filter( item => {
                if(!item.completed){
                    return item
                }
            })
        } else if(type === 'SHOW_COMPLETED') {
            tempList = list.filter( item => {
                if(item.completed){
                    return item 
                }
            })
        } else {
            tempList = list
        }
        return tempList
    }
}

TodoList.propTypes = {

}

const mapStateToProps = state => {
    return {
        list: state.list,
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        complete: (...args) => {dispatch({type: 'TOGGLE_TODO', id: args[0].id})}
    }
}

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList