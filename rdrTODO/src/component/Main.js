import React, { Component, PropTypes } from 'react';

export default class Main extends Component {
    render() {
        return (
            <ul>
                { this.props.list.map(({text,index, completed}) => (<li onClick={this.handleClick.bind(this,index)} style={{textDecoration: completed ? 'line-through' : '' }} key={index}>{text}</li>))}
            </ul>
        )
    }

    handleClick = e => {
        this.props.toggle(e)
    }
}

Main.propTypes = {

}