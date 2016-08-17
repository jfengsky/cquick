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

    // 初始头部区块
    Header.init()

    // 从服务器获取task数据
    FETCH_LIST()
    .catch()
    .then( data => {
        GV.list = data

        // 初始化列表区块
        TaskList.init()

        // 初始化页脚区块
        Footer.init()
    })
})