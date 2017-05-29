var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userShow = new Schema({
	username: 		{ type: String  },
	correo: 		{ type: String  },
	password: 		{ type: String  },
	token:          { type: String  }
}, {collection: 'users', versionKey: false});

module.exports = mongoose.model('userShow', userShow);

