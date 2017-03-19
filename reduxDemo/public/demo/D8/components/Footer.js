import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        return (
            <div>
                <a href="#all" onClick={this.showAll}>all</a>
                {' '}
                <a href="#todo" onClick={this.showTodo}>todo</a>
                {' '}
                <a href="#completed" onClick={this.showCompleted}>completed</a>
            </div>
        );
    }

    showAll = e => {
        this.props.showAll()
    }

    showTodo = e => {
        this.props.showTodo()
    }

    showCompleted = e => {
        this.props.showCompleted()
    }
}

Footer.propTypes = {

}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showAll: (...args) => {dispatch({type: 'SHOW_ALL'})},
        showTodo: (...args) => {dispatch({type: 'SHOW_TODO'})},
        showCompleted: (...args) => {dispatch({type: 'SHOW_COMPLETED'})}
    }
}

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default Footer