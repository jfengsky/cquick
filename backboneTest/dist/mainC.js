/*! This file is created by xxxx-xx-xx xx:xx */
webpackJsonp([2,3],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var Person = Backbone.Model.extend({
	    urlRoot: '/user',
	    initialize: function initialize() {
	        var _this = this;

	        console.log('create mode');
	        this.bind('change:age', function () {
	            console.log('name Change:' + _this.get('name'));
	        });

	        // 对所有属性进行监听
	        this.on('change', function (model) {
	            console.log('model:');
	            console.log(model);
	        });

	        this.bind('error', function (model, error) {
	            console.log(error);
	        });
	    },
	    validate: function validate(attribute) {
	        if (attribute.age == 100) {
	            return 'age error';
	        }
	    },

	    defaults: {
	        name: 'Bob',
	        age: 10
	    }
	});

	var person = new Person();
	person.set({
	    name: 'joe',
	    age: 99
	});
	console.log(person.toJSON());
	person.set({
	    name: '',
	    age: 100
	});

	person.save({
	    name: 'joe',
	    age: 99
	}, {
	    success: function success(user) {
	        console.log(user);
	    }
	});

/***/ }
]);