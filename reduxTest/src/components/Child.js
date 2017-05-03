import React, { Component, PropTypes } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        child
        {this.props.children}
      </div>
    );
  }
}

Child.propTypes = {

};

export default Child;