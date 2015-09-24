var Backbone = require('backbone');
var listModel = require('../models/listModel');
module.exports = Backbone.Collection.extend({
	model: listModel,
	url: 'http://tiyfe.herokuapp.com/collections/noelbackbonelist'
});