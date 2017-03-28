import React, { Component, PropTypes } from 'react';

export default class Main extends Component {
    render() {
        let { filter, list } = this.props

        list = this.filter(list, filter)

        return (
            <ul>
                { list.map(({text,index, completed}) => (<li onClick={this.handleClick.bind(this,index)} style={{textDecoration: completed ? 'line-through' : '' }} key={index}>{text}</li>))}
            </ul>
        )
    }

    handleClick = e => {
        this.props.toggle(e)
    }

    filter = (list, filter) => {
        if(filter === 'all') {
            return list
        } else if (filter === 'active' ) {
            return [...list].filter( item => {
                return !item.completed
            })
        } else {
            return [...list].filter( item => {
                return item.completed
            })
        }
    }
}

Main.propTypes = {

}