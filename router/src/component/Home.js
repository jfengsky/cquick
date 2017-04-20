import React, { Component, PropTypes } from 'react'

import HomeView from './HomeView'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <div>
        <HomeView value={this.state.value} />
        <button onClick={this.add}>+</button>
        {' '}
        <button onClick={this.reduce}>-</button>
      </div>
    )
  }
  add = e => {
    // 加
    this.setState({
      value: ++this.state.value
    })
  }
  reduce = e => {
    // 减
    this.setState({
      value: --this.state.value
    })
  }
}

Home.propTypes = {

}