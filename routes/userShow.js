module.exports = function(app) {

  var userShow  = require('../models/userShow.js');

  findAlluserShows = function(req, res) {
  	userShow.find(function(err, users) {
  		if(!err) {
        console.log('GET /users')
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  findById = function(req, res) {
  	userShow.findById(req.params.id, function(err, user) {
  		if(!err) {
        console.log('GET /user/' + req.params.id);
  			res.send(user);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  findByIdGoogle = function(req, res) {
    userShow.find({'id_google': req.params.id_google}).limit(1).exec(function(err, user) {
      if(!err) {
        console.log('GET /user/' + req.params.id_google);
        if(user.length == 0){
          res.send('ERROR');
        }
        else{
          res.send(user[0]);
        }
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };


  adduserShow = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var user = new userShow({
      id_google  : req.body.id_google,
  		nombre     : req.body.nombre,
      correo     : req.body.correo,
      edad       : req.body.edad,
      empresa    : req.body.empresa,
      comercio   : req.body.comercio,
      crecer     : req.body.crecer,
      emprender  : req.body.emprender,
      financiar  : req.body.financiar,
      innovar    : req.body.innovar,
      anho       : req.body.anho,
      region     : req.body.region
  	});

  	user.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(user);
  };

  //PUT - Update a register already exists
  updateuserShow = function(req, res) {
  	userShow.findById(req.params.id, function(err, user) {
      user.id_google  = req.body.id_google;
      user.nombre     = req.body.nombre;
  		user.correo     = req.body.correo;
  		user.edad       = req.body.edad;
  		user.empresa    = req.body.empresa;
  		user.comercio   = req.body.comercio;
  		user.crecer     = req.body.crecer;
      user.emprender  = req.body.emprender;
      user.financiar  = req.body.financiar;
      user.innovar    = req.body.innovar;
      user.anho       = req.body.anho;
      user.region     = req.body.region;
  		user.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  deleteuserShow = function(req, res) {
  	userShow.findById(req.params.id, function(err, user) {
  		user.remove(function(err) {
  			if(!err) {
  				console.log('Eliminado');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/users', findAlluserShows);
  app.get('/user/:id', findById);
  app.get('/user_google/:id_google', findByIdGoogle);
  app.post('/user', adduserShow);
  app.put('/user/:id', updateuserShow);
  app.delete('/user/:id', deleteuserShow);

}