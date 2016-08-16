/**
 * 主入口
 */

// 全局变量
import GV from './gv'

// 头部模块
import Header from './header'

// 任务列表区模块
import TaskList from './taskList'

// 底部区块
import Footer from './footer'

import { FETCH_LIST } from './fetch'

$(document).ready(()=>{

    // 初始化各个区块
    Header.init()
    TaskList.init()
    Footer.init()

    // 从服务器获取已经存在的数据
    FETCH_LIST('data')
    .catch()
    .then( data => {
        GV.list = data
    })
})