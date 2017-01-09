var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var fondoShow = new Schema({
	origen: 		{ type: String },
	titulo: 		{ type: String },
	descripcion: 	{ type: String },
	quienes:        { type: String },
	apoyo: 			{ type: String },
	como: 			{ type: String },
	link: 			{ type: String }
}, {collection: 'fondoShow' });

module.exports = mongoose.model('fondoShow', fondoShow);