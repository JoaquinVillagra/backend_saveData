var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var dataShow = new Schema({
	date_time: 		{ type: String },
	value1: 		{ type: String },
	value2: 		{ type: String }
}, {collection: 'data', versionKey: false});

module.exports = mongoose.model('dataShow', dataShow);