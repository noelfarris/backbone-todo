var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		list: '',
		incomplete: true
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/noelbackbonelist',
	idAttribute: '_id'

});