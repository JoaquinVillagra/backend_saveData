var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var dataShow = new Schema({
	/*date_time: 		{ type: String },*/
	pregunta_id:    { type: String },
	alternativa_1: 	{ type: String },
	alternativa_2: 	{ type: String },
	alternativa_3: 	{ type: String },
	alternativa_4: 	{ type: String }
}, {collection: 'data', versionKey: false});

module.exports = mongoose.model('dataShow', dataShow);