import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        return (
            <div>
                <button onClick={this.Two}> x2 </button>
                <button onClick={this.Three}> x3 </button>
            </div>
        );
    }
    Two = e => {
        this.props.dispatch({type: 'TWO'})
    }
    Three = e => {
        this.props.dispatch({type: 'THREE'})
    }
}

Footer.propTypes = {

};

Footer = connect()(Footer)
export default Footer;