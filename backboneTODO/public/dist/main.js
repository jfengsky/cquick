/*!  2016-08-17 09:58  */
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

	var _taskList = __webpack_require__(4);

	var _taskList2 = _interopRequireDefault(_taskList);

	var _footer = __webpack_require__(5);

	var _footer2 = _interopRequireDefault(_footer);

	var _fetch = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 底部区块


	// 头部模块
	$(document).ready(function () {

	    // 初始头部区块
	    _header2.default.init();

	    // 从服务器获取task数据
	    (0, _fetch.FETCH_LIST)().catch().then(function (data) {
	        _gv2.default.list = data;

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

	var _fetch = __webpack_require__(6);

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
	    attributes: {
	        id: 'header'
	    },
	    initialize: function initialize() {

	        // 渲染header
	        this.render().$el.appendTo($('#todoapp'));

	        // 监听input事件
	        this.listenTo(this.model, 'change', this.taskChange);
	    },

	    events: {
	        'keypress #new-todo': 'taskKeyPress'
	    },
	    taskChange: function taskChange() {
	        this.initialize();
	    },
	    render: function render() {
	        var headerData = this.model.toJSON();
	        this.$el.html('<h1>' + headerData.title + '</h1><input id="new-todo" value="' + headerData.task + '" placeholder="' + headerData.placeholder + '">');
	        return this;
	    },
	    taskKeyPress: function taskKeyPress(e) {
	        var desc = $(e.target).val();
	        // 文本框回车
	        if (e.keyCode === 13) {
	            // this.model.set('task', '')

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _gv = __webpack_require__(2);

	var _gv2 = _interopRequireDefault(_gv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 选择所有按钮
	 */
	var TaskTopView = Backbone.View.extend({
	    tagName: 'section',
	    attributes: {
	        id: 'main'
	    },
	    initialize: function initialize() {
	        this.render().$el.appendTo('#todoapp');
	    },
	    render: function render() {
	        this.$el.html('<input id="toggle-all" type="checkbox" /><label for="toggle-all">Mark all as complete</label>');
	        return this;
	    }
	});

	/**
	 * 创建任务视图对象
	 * @type {[type]}
	 */
	/**
	 * 任务list区块
	 */
	var TaskView = Backbone.View.extend({
	    tagName: 'li',
	    className: '',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        var _model$toJSON = this.model.toJSON();

	        var desc = _model$toJSON.desc;
	        var done = _model$toJSON.done;


	        var hasCheck = done ? 'checked' : '';
	        var hasCheckClass = done ? 'class="completed"' : '';

	        this.$el.html('<li ' + hasCheckClass + '>\n          <div class="view">\n            <input class="toggle" type="checkbox" ' + hasCheck + '>\n            <label>' + desc + '</label>\n            <button class="destroy"></button>\n          </div>\n          <input class="edit" value="todo 1"></li>');
	        return this;
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
	    attributes: {
	        id: 'todo-list'
	    },
	    initialize: function initialize() {
	        // this.listenTo(this.collection, 'add', this.addTask)
	        // this.collection.on('add', this.itemRend, this)
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
	    // ,
	    // addTask(model){
	    //   debugger
	    // }

	});

	var TaskList = {
	    init: function init() {
	        var tempData = _gv2.default.list;
	        new TaskTopView();
	        var todoTaskCollection = new TaskCollection(tempData);
	        var todoTadkCollectionView = new TaskCollectionView({
	            collection: todoTaskCollection
	        });
	        $('#main').append(todoTadkCollectionView.$el);
	        _gv2.default.todoTaskCollection = todoTaskCollection;
	    }
	};

	exports.default = TaskList;

/***/ },
/* 5 */
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
	    defaults: {
	        type: 'count',
	        total: 0
	    }
	});

	var countObj = new CountModel();

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

	// 清除已完成
	var clearObj = {
	    type: 'clear',
	    total: 0,
	    txt: 'Clear completed'
	};

	/**
	 * 总计View对象
	 */
	var LeftView = Backbone.View.extend({
	    tagName: 'span',
	    attributes: {
	        id: 'todo-count'
	    },
	    _tpl: function _tpl(total) {
	        return '<strong>' + total + '</strong> items left';
	    },
	    initialize: function initialize() {
	        this.render();
	        this.listenTo(this.model, 'change', this.countChange);
	    },
	    render: function render() {
	        var json = this.model.toJSON();
	        this.$el.html(this._tpl(json.total));
	        return this;
	    },


	    /**
	     * 修改份数
	     * 
	     */
	    countChange: function countChange() {
	        $('#todo-count').html(this._tpl(_gv2.default.list.length));
	    }
	});

	/**
	 * 底部筛选对象
	 */
	var filterListView = Backbone.View.extend({
	    tagName: 'ul',
	    attributes: {
	        id: 'filters'
	    },
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
	    attributes: {
	        id: 'clear-completed'
	    },
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
	    attributes: {
	        id: 'footer'
	    },
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
	 * 获取完成的task
	 * @param  {Array} data  所有任务
	 * @return {Array}      
	 */
	var getFinishTask = function getFinishTask(data) {
	    var tempTask = [];
	    if (data.length) {
	        data.map(function (item) {
	            if (item.done) {
	                tempTask.push(item);
	            }
	        });
	    }
	    return tempTask;
	};

	var Footer = {
	    init: function init() {

	        var list = _gv2.default.list;
	        var hasDoneTask = getFinishTask(list);

	        // 重新计算任务个数
	        // countObj.total = list.length
	        // clearObj.total = hasDoneTask.length

	        var footerCollection = new FooterCollection([CountModel, filterList, clearObj]);

	        new FooterCollectionView({
	            collection: footerCollection
	        });
	    }
	};

	exports.default = Footer;

/***/ },
/* 6 */
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

/***/ }
]);