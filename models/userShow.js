var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userShow = new Schema({
	id_google: 		{ type: String  },
	nombre: 		{ type: String  },
	correo: 		{ type: String  },
	edad: 			{ type: String  },
	empresa: 		{ type: String  },
	comercio: 		{ type: String  },
	crecer:      	{ type: Boolean },
	emprender:      { type: Boolean },
	financiar:      { type: Boolean },
	innovar:      	{ type: Boolean }
}, {collection: 'userShow' });

module.exports = mongoose.model('userShow', userShow);

