/**
 * 项目用到的所有ajax请求
 * 
 */


/**
 * 获取全部任务数据
 */
export const FETCH_LIST = data => {
    const setting = {
        url: '/getAllTask',
        type: 'post',
        dataType: 'json'
    }
    return Promise.resolve($.ajax(setting))
}

/**
 * 添加 删除 更新 清除任务
 * @param  {Object} data 
 * @return {PromseObject}
 */
export const TASK_UPDATA = data => {
    const setting = {
        url: '/updata',
        type: 'post',
        dataType: 'json',
        data
    }
    return Promise.resolve($.ajax(setting))
}