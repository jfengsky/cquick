/**
 * 请求数据
 */

/**
 * 获取task数据
 * @constructor
 */
export let GET_LIST = () => {
  const setting = {
    url: '/getAllTask',
    type: 'get',
    dataType: 'json',
    cache: false
  }
  return Promise.resolve($.ajax(setting))
}