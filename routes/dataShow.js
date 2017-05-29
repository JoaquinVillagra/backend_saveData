module.exports = function(app) {

  var dataShow = require('../models/dataShow.js');

  findAlldataShows = function(req, res) {
  	dataShow.find(function(err, data) {
  		if(!err) {
        console.log('GET /data')
  			res.send(data);
  		} else {
  			var data = [];
        res.send(data);
  		}
  	});
  };

  findById = function(req, res) {
  	dataShow.findById(req.params.id, function(err, data) {
  		if(!err) {
        console.log('GET /data/' + req.params.id);
  			res.send(data);
  		} else {
        var data = [];
        res.send(data);
  		}
  	});
  };


  adddataShow = function(req, res) {
  	var data = new dataShow({
      date_time:    req.body.date_time,
  		value1:       req.body.value1,
      value2:       req.body.value2
  	});

  	data.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  	res.send(data);
  };

  //PUT - Update a register already exists
  updatedataShow = function(req, res) {
  	dataShow.findById(req.params.id, function(err, data) {
      data.date_time    =  req.body.date_time;
      data.value1       =  req.body.value1;
      data.value2       =  req.body.value2;
  		data.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(data);
  		});
  	});
  }

  deletedataShow = function(req, res) {
  	dataShow.findById(req.params.id, function(err, data) {
  		data.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/data', findAlldataShows);
  app.get('/data/:id', findById);
  app.post('/data', adddataShow);
  app.put('/data/:id', updatedataShow);
  app.delete('/data/:id', deletedataShow);

}
