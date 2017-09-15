export default {
  menu: {
    page: [{
      link: '/',
      title: '页面列表',
      cmp: 'PageRoute'
    },{
      link: '/page',
      title: '页面列表',
      cmp: 'PageRoute'
    }, {
      link: '/page/type',
      title: '编辑页面类型',
      cmp: 'PageType'
    }, {
      link: '/page/typeApi',
      title: '编辑页面接口配置',
      cmp: 'PageTypeApi'
    }, {
      link: '/page/add',
      title: '新增页面',
      cmp: 'AddPage'
    }],
    api: [{
      link: '/api',
      title: '接口列表',
      cmp: 'ApiRoute'
    },{
      link: '/api/type',
      title: '编辑接口类型',
      cmp: 'ApiType'
    },{
      link: '/api/add',
      title: '新增接口',
      cmp: 'AddApi'
    }],
    tools: [{
      link: '/tools',
      title: '打包工具',
      cmp: 'Tools'
    }]
  }
}