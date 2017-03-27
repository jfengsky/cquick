import React, { Component, PropTypes } from 'react';

class Foot extends Component {
    render() {
        return (
            <div>
                <a href="#all">all</a>
                {' '}
                <a href="#active">active</a>
                {' '}
                <a href="#completed">completed</a>
            </div>
        )
    }
}

Foot.propTypes = {

}

export default Foot;