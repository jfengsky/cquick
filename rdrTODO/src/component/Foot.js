import React, { Component, PropTypes } from 'react';

class Foot extends Component {
    render() {
        return (
            <div>
                <a href="#all" onClick={this.handleClickAll}>all</a>
                {' '}
                <a href="#active" onClick={this.handleClickActive}>active</a>
                {' '}
                <a href="#completed" onClick={this.handleClickCompleted}>completed</a>
            </div>
        )
    }
    handleClickAll = e => {
        this.props.filter('all')
    }
    handleClickActive = e => {
        this.props.filter('active')
    }
    handleClickCompleted = e => {
        this.props.filter('completed')
    }
}

Foot.propTypes = {

}

export default Foot;