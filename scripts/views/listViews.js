'use strict';
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var listModel = require('../models/listModel.js');
var listCollection = require('../collections/listCollection.js');
module.exports = Backbone.View.extend({
	tagName: 'li',
	events: {
		//event handling goes here
	},
	
	initialize: function() {
		var list = new listCollection();
		onButtonClick: function() {
			list.add({
				list: $('#item').val(),
			});
			this.save();
		},
		render: function() {

		}
	}
});