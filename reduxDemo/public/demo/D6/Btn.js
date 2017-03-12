import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'

class Btn extends Component {
    render() {
        let { dispatch }= this.props
        return (
            <div>
                <button onClick={this.Add}> + </button>
                <button onClick={this.Reduce}> - </button>
            </div>
        );
    }

    Add = e => {
        let { dispatch }= this.props
        dispatch({type: 'ADD'})
    }

    Reduce = e => {
        let { dispatch }= this.props
        dispatch({type: 'REDUCE'})
    }
}

Btn.propTypes = {

};

Btn = connect()(Btn)

export default Btn;