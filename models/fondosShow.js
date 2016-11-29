var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var fondoShow = new Schema({
	titulo: 		{ type: String },
	descripcion: 	{ type: String },
	quienes:        { type: String },
	apoyo: 			{ type: String },
	como: 			{ type: String },
	link1: 			{ type: String },
	link2: 			{ type: String },
	link3: 			{ type: String },
	link4: 			{ type: String }
});
module.exports = mongoose.model('fondoShow', fondoShow);