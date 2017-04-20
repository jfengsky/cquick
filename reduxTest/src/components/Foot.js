/**
 * 任务过滤区块
 * 功能: 
 *    1: show all: 显示所有任务； show completed：显示已完成任务；show action：显示未完成任务
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { showAll, showCompleted, showAction} from '../actions/filter'

class Foot extends Component {
  render() {
    return (
      <div>
        <a href="#all" onClick={this.showAll}>show all</a>
        {' '}
        <a href="#completed" onClick={this.showCompleted}>show completed</a>
        {' '}
        <a href="#action" onClick={this.showAction}>show action</a>
      </div>
    )
  }

  showAll = e => {
    this.props.showAll()
  }

  showCompleted = e => {
    this.props.showCompleted()
  }

  showAction = e => {
    this.props.showAction()
  }
}

Foot.propTypes = {

}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAll: (...args) => {dispatch(showAll())},
    showCompleted: (...args) => {dispatch(showCompleted())},
    showAction: (...args) => {dispatch(showAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foot)