/**
 * 显示任务区块
 * 功能：
 *    1: 根据过滤显示任务列表
 *    2: 点击和取消完成任务
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo'
import { SHOW_ACTION, SHOW_COMPLETED} from '../actions/filter'

class View extends Component {
  render() {
    let {
      list,
      filter
    } = this.props

    let tempList = this.filterList(list, filter)

    return (
      <ul>
        {
          tempList.map(item => {
            return (
              <li onClick={this.clickHandle.bind(this, item)} style={{ textDecoration: item.completed ? "line-through" : "" }} key={item.index}>{item.text}</li>
            )
          })
        }
      </ul>
    )
  }

  /**
   * 切换任务状态
   */
  clickHandle = item => {
    this.props.complete({ index: item.index })
  }

  filterList = (list, type) => {
    let tempList = []
    
    if (type === SHOW_ACTION) {
      tempList = list.filter(item => {
        if (!item.completed) {
          return item
        }
      })
    } else if (type === SHOW_COMPLETED) {
      tempList = list.filter(item => {
        if (item.completed) {
          return item
        }
      })
    } else {
      tempList = list
    }
    return tempList
  }
}

View.propTypes = {

}

// 把全局state添加到props
const mapStateToProps = state => {
  return {
    // 按需添加属性
    list: state.list,
    filter: state.filter
  }
}

// 把时间执行方法添加到props
const mapDispatchToProps = dispatch => {
  return {
    complete: (...args) => { dispatch(toggleTodo({ index: args[0].index })) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)