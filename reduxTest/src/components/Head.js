/**
 * 顶部添加任务模块
 * 功能:
 *   1:空判断
 *   2:添加成功后自动清空
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/todo'

class Head extends Component {
  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input type="text" ref="todoInput" />
        <button type="submit">add</button>
      </form>
    )
  }
  /**
   * 添加任务
   */
  addTodo = e => {
    e.preventDefault()
    let text = this.refs.todoInput.value.trim()
    if (text) {
      this.props.dispatch(addTodo(text))
      this.refs.todoInput.value = ''
    }
  }
}

Head.propTypes = {

}

// 给props绑定其它属性，具体参考react-redux的connect方法 mapStateToProps
// const mapStateToProps = (state, ownProps) => {
//   return {
//     state
//     ownProps
//   }
// }

// 给Head绑定dispatch
// Head = connect(mapStateToProps)(Head)
Head = connect()(Head)

export default Head