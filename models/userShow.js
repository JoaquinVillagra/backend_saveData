var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userShow = new Schema({
	nombre: 		{ type: String },
	correo: 		{ type: String },
	password:       { type: String },
	edad: 			{ type: String },
	empresa: 		{ type: String },
	comercio: 		{ type: String },
	crecer:      	{ type: Boolean },
	emprender:      { type: Boolean },
	financiar:      { type: Boolean },
	innovar:      	{ type: Boolean }
});
module.exports = mongoose.model('userShow', userShow);