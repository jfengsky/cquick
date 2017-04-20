import React, { Component, PropTypes } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.data.map( ({type, second}) => {
            return (
              <li key={second} onClick={this.clickHandle.bind(this,second)}>{type}</li>
            )
          })
        }
      </ul>
    );
  }

  clickHandle = second => {
    this.props.storeChange(second)
  }
}

List.propTypes = {

}

export default List