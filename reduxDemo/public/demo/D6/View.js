import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class View extends Component {
    render() {
        return (
            <div onClick={this.clear}>
                {this.props.count || 0}
            </div>
        );
    }

    clear = e => {
        // this.props.dispatch({type: 'CLEAR'})
        this.props.clear()
    }
}

View.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        // clear: dispatch({type: 'CLEAR'})
        clear: (...args) =>(dispatch({type: 'CLEAR'}))
    }
}

View = connect(mapStateToProps, mapDispatchToPros)(View)

export default View;