var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var questionShow = new Schema({
	id: 		    { type: String },
	pregunta:       { type: String },
	alternativa_1: 	{ type: String },
	alternativa_2: 	{ type: String },
	alternativa_3: 	{ type: String },
	alternativa_4: 	{ type: String }
}, {collection: 'questions', versionKey: false});

module.exports = mongoose.model('questionShow', questionShow);