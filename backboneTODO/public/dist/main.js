/*!  2016-08-21 15:01  */
webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _gv = __webpack_require__(2);

	var _gv2 = _interopRequireDefault(_gv);

	var _header = __webpack_require__(3);

	var _header2 = _interopRequireDefault(_header);

	var _taskList = __webpack_require__(5);

	var _taskList2 = _interopRequireDefault(_taskList);

	var _footer = __webpack_require__(6);

	var _footer2 = _interopRequireDefault(_footer);

	var _fetch = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 底部区块


	// 头部模块
	$(document).ready(function () {
	        // 从服务器获取task数据
	        (0, _fetch.FETCH_LIST)().catch().then(function (data) {
	                _gv2.default.list = data;

	                // 初始头部区块
	                _header2.default.init();

	                // 初始化列表区块
	                _taskList2.default.init();

	                // 初始化页脚区块
	                _footer2.default.init();
	        });
	});

	// 任务列表区模块
	/**
	 * 主入口
	 */

	// 全局变量

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/**
	 * 全局变量，都写在这里
	 */

	var GV = {

	  // 所有任务列表
	  list: []
	};

	exports.default = GV;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _gv = __webpack_require__(2);

	var _gv2 = _interopRequireDefault(_gv);

	var _fetch = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 声明Model对象
	 * 
	 */
	/**
	 * header 区块
	 */

	var HeaderModel = Backbone.Model.extend({
	    defaults: {

	        // 主标题
	        title: 'todos',

	        // 输入框的placeholder
	        placeholder: 'What needs to be done?',

	        // 输入框默认值
	        task: ''
	    }
	});

	// 实例化Model
	var headerMod = new HeaderModel();

	/**
	 * 声明View对象
	 * 
	 */
	var HeaderView = Backbone.View.extend({
	    tagName: 'header',
	    // attributes: {

	    // },
	    id: 'header',
	    initialize: function initialize() {

	        // 渲染header
	        this.render().$el.appendTo($('#todoapp'));

	        // 监听input事件
	        // this.listenTo(this.model,'change', this.taskChange)
	    },

	    events: {
	        'keypress #new-todo': 'taskKeyPress'
	    },
	    // taskChange(){
	    //     this.initialize()
	    // },
	    render: function render() {
	        var headerData = this.model.toJSON();
	        this.$el.html('<h1>' + headerData.title + '</h1><input id="new-todo" value="' + headerData.task + '" placeholder="' + headerData.placeholder + '">');
	        return this;
	    },
	    taskKeyPress: function taskKeyPress(e) {
	        var desc = $(e.target).val();
	        // 文本框回车
	        if (e.keyCode === 13) {

	            // 数据验证
	            if (desc.length < 3) {
	                return false;
	            }
	            // 告诉服务器添加一个task
	            (0, _fetch.TASK_UPDATA)({
	                type: 'add',
	                desc: desc
	            }).catch().then(function (data) {
	                if (data.success) {
	                    var addData = {
	                        id: data.id,
	                        desc: desc,
	                        done: false
	                    };
	                    _gv2.default.list.push(addData);
	                    _gv2.default.todoTaskCollection.add(addData);

	                    // 清空input
	                    $('#new-todo').val('');
	                }
	            });
	        }
	    }
	});

	var Header = {

	    /**
	     * 初始化
	     * @return {[type]} [description]
	     */
	    init: function init() {

	        // 直接渲染header
	        // 实例化View
	        new HeaderView({
	            model: headerMod
	        });
	    }
	};

	exports.default = Header;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * 项目用到的所有ajax请求
	 * 
	 */

	/**
	 * 获取全部任务数据
	 */
	var FETCH_LIST = exports.FETCH_LIST = function FETCH_LIST(data) {
	    var setting = {
	        url: '/getAllTask',
	        type: 'post',
	        dataType: 'json'
	    };
	    return Promise.resolve($.ajax(setting));
	};

	/**
	 * 添加 删除 更新 清除任务
	 * @param  {Object} data 
	 * @return {PromseObject}
	 */
	var TASK_UPDATA = exports.TASK_UPDATA = function TASK_UPDATA(data) {
	    var setting = {
	        url: '/updata',
	        type: 'post',
	        dataType: 'json',
	        data: data
	    };
	    return Promise.resolve($.ajax(setting));
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _gv = __webpack_require__(2);

	var _gv2 = _interopRequireDefault(_gv);

	var _fetch = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 选择所有按钮
	 */
	/**
	 * 任务list区块
	 */
	var TaskTopView = Backbone.View.extend({
	    tagName: 'section',
	    // attributes: {

	    // },
	    id: 'main',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        this.$el.html('<input id="toggle-all" type="checkbox" /><label for="toggle-all">Mark all as complete</label>');
	        return this;
	    }
	});

	/**
	 * 创建任务列表视图对象
	 * @type {[type]}
	 */
	var TaskView = Backbone.View.extend({
	    tagName: 'li',
	    className: '',
	    initialize: function initialize() {
	        this.render();
	    },

	    events: {
	        'click .destroy': 'taskRemove',
	        'click input[type="checkbox"]': 'taskDone',
	        'dblclick label': 'taskModify'
	    },
	    render: function render() {
	        var _model$toJSON = this.model.toJSON();

	        var desc = _model$toJSON.desc;
	        var id = _model$toJSON.id;
	        var done = _model$toJSON.done;


	        var hasCheck = done ? 'checked' : '';
	        var hasCheckClass = done ? 'class="completed"' : '';

	        this.$el.html('<li ' + hasCheckClass + '>\n          <div class="view">\n            <input class="toggle" type="checkbox" ' + hasCheck + '>\n            <label>' + desc + '</label>\n            <button class="destroy"></button>\n          </div>\n          <input class="edit" value="' + desc + '"></li>');
	        return this;
	    },
	    reRend: function reRend() {
	        _gv2.default.todoTaskCollection.reset();
	    },
	    taskRemove: function taskRemove(e) {
	        var self = this;
	        var model = this.model;

	        var _model$toJSON2 = model.toJSON();

	        var id = _model$toJSON2.id;
	        var collection = model.collection;

	        (0, _fetch.TASK_UPDATA)({
	            id: id,
	            type: 'remove'
	        }).catch().then(function (data) {
	            if (data.success) {

	                // 删除model
	                var removeIndex = null;
	                _gv2.default.list.map(function (item, index) {
	                    if (id === item.id) {
	                        removeIndex = index;
	                    }
	                });
	                if (removeIndex !== null) {
	                    _gv2.default.list.splice(removeIndex, 1);
	                }

	                self.reRender();
	            }
	        });
	    },
	    taskDone: function taskDone(e) {
	        console.log('taskDone');
	    },
	    taskModify: function taskModify(e) {
	        console.log('taskModify');
	    }
	});

	/**
	 * 创建任务列表集合
	 */
	var TaskCollection = Backbone.Collection.extend({
	    initialize: function initialize() {
	        this.on({
	            add: function add(model, collection, options) {
	                var newTask = new TaskView({
	                    model: model
	                });
	                $('#todo-list').prepend(newTask.$el);
	                // 修改任务数量
	                _gv2.default.countObj.set('total', collection.size());
	            },
	            done: function done(model, collection, options) {
	                console.log('task done');
	            }
	        });
	    }
	});

	/**
	 * 创建集合视图对象
	 * @type {[type]}
	 */
	var TaskCollectionView = Backbone.View.extend({
	    tagName: 'ul',
	    // attributes: {

	    // },
	    id: 'todo-list',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        this.collection.each(this.itemRend, this);
	    },


	    /**
	     * 渲染每个model
	     * @param  {Object} model 
	     * @return {[type]}       [description]
	     */
	    itemRend: function itemRend(model) {
	        // 创建一个视图
	        var tempTaskView = new TaskView({
	            model: model
	        });
	        this.$el.append(tempTaskView.render().$el);
	    }
	});

	var TaskList = {
	    init: function init() {
	        var tempData = _gv2.default.list;

	        // task主容器DOM
	        var taskListContent = new TaskTopView();

	        // 生成任务列表
	        var todoTaskCollection = new TaskCollection(tempData);
	        var todoTadkCollectionView = new TaskCollectionView({
	            collection: todoTaskCollection
	        });

	        // 把任务列表加入到task主容器中
	        taskListContent.$el.append(todoTadkCollectionView.$el);

	        // 把task主容器一次放入页面中
	        taskListContent.$el.appendTo('#todoapp');

	        // 任务列表集合存入全局变量，方便其它模块添加task
	        _gv2.default.todoTaskCollection = todoTaskCollection;
	    }
	};

	exports.default = TaskList;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _gv = __webpack_require__(2);

	var _gv2 = _interopRequireDefault(_gv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 页脚筛选集合对象
	 * 
	 */

	// 完成的任务列表
	// let hasDoneTask = []

	var FooterCollection = Backbone.Collection.extend();

	// 总计

	/**
	 * 页脚筛选操作模块
	 */
	var CountModel = Backbone.Model.extend({
	    // defaults: {
	    //     type: 'count',
	    //     total: 0
	    // }
	});

	// 筛选
	var filterList = {
	    type: 'filter',
	    list: [{
	        title: 'All',
	        select: true
	    }, {
	        title: 'Active',
	        select: false
	    }, {
	        title: 'Completed',
	        select: false
	    }]
	};

	/**
	 * 总计View对象
	 */
	var LeftView = Backbone.View.extend({
	    tagName: 'span',
	    // attributes: {

	    // },
	    id: 'todo-count',
	    _tpl: function _tpl(total) {
	        return '<strong>' + total + '</strong> items left';
	    },
	    initialize: function initialize() {
	        this.render();

	        // 监听task任务数量变化
	        this.listenTo(this.model, 'change', this.countChange);
	    },
	    render: function render() {
	        var json = this.model.toJSON();
	        this.$el.html(this._tpl(json.total));
	        return this;
	    },


	    /**
	     * 修改页面task份数
	     */
	    countChange: function countChange() {
	        var json = this.model.toJSON();
	        $('#todo-count').html(this._tpl(json.total));
	    }
	});

	/**
	 * 底部筛选对象
	 */
	var filterListView = Backbone.View.extend({
	    tagName: 'ul',
	    // attributes: {
	    //     id: 'filters'
	    // },
	    id: 'filters',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        this.model.map(this.itemRend, this);
	    },
	    itemRend: function itemRend(itemModel) {
	        var selectClass = itemModel.select ? 'class="selected"' : '';
	        this.$el.append('<li><a ' + selectClass + ' href="#/' + itemModel.title + '">' + itemModel.title + '</a></li>');
	    }
	});

	/**
	 * 清除完成对象
	 */
	var clearCompleteView = Backbone.View.extend({
	    tagName: 'button',
	    // attributes: {

	    // },
	    id: 'clear-completed',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        var json = this.model.toJSON();
	        this.$el.html(json.txt + '(' + json.total + ')');
	    }
	});

	/**
	 * 页脚View集合对象
	 * @type {[type]}
	 */
	var FooterCollectionView = Backbone.View.extend({
	    tagName: 'footer',
	    // attributes: {

	    // },
	    id: 'footer',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        this.collection.map(this.itemRend, this);
	        this.$el.appendTo($('#todoapp'));
	    },


	    /**
	     * 渲染每个li
	     * @return {[type]} [description]
	     */
	    itemRend: function itemRend(model) {
	        var json = model.toJSON();
	        var filterItem = void 0;
	        if (json.type === 'count') {
	            filterItem = new LeftView({
	                model: model
	            });
	        } else if (json.type === 'filter') {
	            filterItem = new filterListView({
	                model: json.list
	            });
	        } else {
	            filterItem = new clearCompleteView({
	                model: model
	            });
	        }
	        if (filterItem) {
	            this.$el.append(filterItem.$el);
	        }
	    }
	});

	/**
	 * 把task进行归类, 返回已完成任务和未完成的任务
	 * @param  {Array} data  所有任务
	 * @return {Object}         
	 */
	var splitTask = function splitTask(data) {
	    var taskDone = [];
	    var taskAct = [];
	    if (data.length) {
	        data.map(function (item) {
	            if (item.done) {
	                taskDone.push(item);
	            } else {
	                taskAct.push(item);
	            }
	        });
	    }
	    return {
	        taskDone: taskDone,
	        taskAct: taskAct
	    };
	};

	var Footer = {
	    init: function init() {

	        // 所有任务
	        var list = _gv2.default.list;

	        // 任务分类

	        var _splitTask = splitTask(list);

	        var taskDone = _splitTask.taskDone;
	        var taskAct = _splitTask.taskAct;

	        // 任务总数Model

	        var countObj = new CountModel({
	            type: 'count',
	            total: taskAct.length
	        });

	        // 已完成按钮
	        var clearObj = {
	            type: 'clear',
	            total: taskDone.length,
	            txt: 'Clear completed'
	        };

	        var footerCollection = new FooterCollection([countObj, filterList, clearObj]);

	        new FooterCollectionView({
	            collection: footerCollection
	        });

	        _gv2.default.countObj = countObj;
	    }
	};

	exports.default = Footer;

/***/ }
]);