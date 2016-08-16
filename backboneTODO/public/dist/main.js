/*!  2016-08-16 17:12  */
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

	var _footer = __webpack_require__(6);

	var _footer2 = _interopRequireDefault(_footer);

	var _fetch = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 底部区块


	// 头部模块
	$(document).ready(function () {

	    // 初始化各个区块
	    _header2.default.init();
	    _taskList2.default.init();
	    _footer2.default.init();

	    // 从服务器获取已经存在的数据
	    (0, _fetch.FETCH_LIST)('data').catch().then(function (data) {
	        _gv2.default.list = data;
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
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * header 区块
	 */

	/**
	 * 声明Model对象
	 * 
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

	        // 文本框回车
	        if (e.keyCode === 13) {
	            this.model.set('task', '');

	            // 把 $(e.target).val() 传给另一个模块
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
	 * 任务list区块
	 */

	var tempData = [{
	    task: 'task1',
	    done: false,
	    id: 1
	}, {
	    task: 'task2',
	    done: false,
	    id: 2
	}];

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
	var TaskView = Backbone.View.extend({
	    tagName: 'li',
	    className: '',
	    render: function render() {
	        this.$el.html('<li class="">\n          <div class="view">\n            <input class="toggle" type="checkbox">\n            <label>todo 1</label>\n            <button class="destroy"></button>\n          </div>\n          <input class="edit" value="todo 1"></li>');
	        return this;
	    }
	});

	/**
	 * 创建任务列表集合
	 */
	var TaskCollection = Backbone.Collection.extend();

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

	var todoTaskCollection = new TaskCollection(tempData);
	var todoTadkCollectionView = new TaskCollectionView({
	    collection: todoTaskCollection
	});

	var TaskList = {
	    init: function init() {
	        new TaskTopView();
	        var todoTaskCollection = new TaskCollection(tempData);
	        var todoTadkCollectionView = new TaskCollectionView({
	            collection: todoTaskCollection
	        });
	        $('#main').append(todoTadkCollectionView.$el);
	    }
	};

	exports.default = TaskList;

/***/ },
/* 5 */
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
	 * 添加任务
	 * @param  {Object} data 
	 * @return {PromseObject}
	 */
	var TASK_ADD = exports.TASK_ADD = function TASK_ADD(data) {
	    var setting = {
	        url: '/add',
	        type: 'post',
	        dataType: 'json',
	        data: data
	    };
	    return Promise.resolve($.ajax(setting));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * 页脚筛选操作模块
	 */
	var LeftView = Backbone.View.extend({
	    tagName: 'span',
	    attributes: {
	        id: 'todo-count'
	    },
	    initialize: function initialize() {},
	    render: function render() {
	        this.$el.html('<strong>5</strong>items left');
	    }
	});

	var FooterCollection = Backbone.Collection.extend();

	var filter = [{
	    title: 'All',
	    select: true
	}, {
	    title: 'Active',
	    select: false
	}, {
	    title: 'Completed',
	    select: false
	}];

	/**
	 * 底部筛选对象
	 */
	var filterListView = Backbone.View.extend({
	    tagName: 'li',
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        var data = this.model.toJSON();
	        var title = data.title;
	        var selectClass = data.select ? 'class="selected"' : '';
	        this.$el.html('<a ' + selectClass + ' href="#/' + title + '">' + title + '</a>');
	        return this;
	    }
	});

	/**
	 * 页脚View集合对象
	 * @type {[type]}
	 */
	var FooterCollectionView = Backbone.View.extend({
	    tagName: 'ul',
	    attributes: {
	        id: 'filters'
	    },
	    initialize: function initialize() {
	        this.render();
	    },
	    render: function render() {
	        this.collection.map(this.itemRend, this);
	    },


	    /**
	     * 渲染每个li
	     * @return {[type]} [description]
	     */
	    itemRend: function itemRend(model) {
	        var filterItem = new filterListView({
	            model: model
	        });
	        this.$el.append(filterItem.$el);
	    }
	});

	var footerCollection = new FooterCollection(filter);

	var Footer = {
	    init: function init() {
	        var temp = new FooterCollectionView({
	            collection: footerCollection
	        });
	        $('body').append(temp.$el);
	    }
	};

	exports.default = Footer;

/***/ }
]);