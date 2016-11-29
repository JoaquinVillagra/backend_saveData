module.exports = function(app) {

  var fondoShow = require('../models/fondosShow.js');

  findAllfondoShows = function(req, res) {
  	fondoShow.find(function(err, fondos) {
  		if(!err) {
        console.log('GET /fondos')
  			res.send(fondos);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  findById = function(req, res) {
  	fondoShow.findById(req.params.id, function(err, fondo) {
  		if(!err) {
        console.log('GET /fondo/' + req.params.id);
  			res.send(fondo);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };


  addfondoShow = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var fondo = new fondoShow({
  		titulo:       req.body.titulo,
      descripcion:  req.body.descripcion,
      quienes:      req.body.quienes ,  
      apoyo:        req.body.apoyo,
      como:         req.body.como,
      link1:        req.body.link1,
      link2:        req.body.link2,
      link3:        req.body.link3,
      link4:        req.body.link4
  	});

  	fondo.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(fondo);
  };

  //PUT - Update a register already exists
  updatefondoShow = function(req, res) {
  	fondoShow.findById(req.params.id, function(err, fondo) {
      fondo.titulo      =  req.body.titulo;
      fondo.descripcion =  req.body.descripcion;
      fondo.quienes     =  req.body.quienes ;  
      fondo.apoyo       =  req.body.apoyo;
      fondo.como        =  req.body.como;
      fondo.link1       =  req.body.link1;
      fondo.link2       =  req.body.link2;
      fondo.link3       =  req.body.link3;
      fondo.link4       =  req.body.link4;
  		fondo.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(fondo);
  		});
  	});
  }

  deletefondoShow = function(req, res) {
  	fondoShow.findById(req.params.id, function(err, fondo) {
  		fondo.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/fondos', findAllfondoShows);
  app.get('/fondo/:id', findById);
  app.post('/fondo', addfondoShow);
  app.put('/fondo/:id', updatefondoShow);
  app.delete('/fondo/:id', deletefondoShow);

}
