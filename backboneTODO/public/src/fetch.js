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
 * 添加任务
 * @param  {Object} data 
 * @return {PromseObject}
 */
export const TASK_ADD = data => {
    const setting = {
        url: '/add',
        type: 'post',
        dataType: 'json',
        data
    }
    return Promise.resolve($.ajax(setting))
}