module.exports = function(app) {
  
  var questionShow = require('../models/questionShow.js');
  var userShow = require('../models/userShow.js');

  findAllquestionShows = function(req, res) {
  	questionShow.find(function(err, data) {
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
  	questionShow.find({id: req.params.id}, function(err, data) {
  		if(!err) {
        //console.log('GET /data/' + req.params.id);
  			res.send(data);
  		} else {
        var data = [];
        res.send(data);
  		}
  	});
  };

  findLast = function(req, res) {
    var pregunta = questionShow.find().sort({id: -1}).limit(1);
    res.send(pregunta);
  };

  addquestionShow = function(req, res) {
    var pregunta = questionShow.find().sort({id: -1}).limit(1);
    var id   = parseInt(pregunta.id)+1;
  	var data = new questionShow({
      id:             id,   
      pregunta:       req.body.pregunta,
      alternativa_1:  req.body.alternativa_1,
      alternativa_2:  req.body.alternativa_2,
      alternativa_3:  req.body.alternativa_3,
      alternativa_4:  req.body.alternativa_4,
  	});

    userShow.find({username: req.body.username, password: req.body.password}, function(err, filtro) {
      if(filtro!="") {
        data.save(function(err) {
          if(!err) {
            //console.log('Created');
          } else {
            //console.log('ERROR: ' + err);
          }
        });
        res.send(data);
      }
      else {
        res.send("User not Auth");
      }
    });
  };

  //PUT - Update a register already exists
  updatequestionShow = function(req, res) {
  	questionShow.find({id: req.params.id}, function(err, data) {
      data.id            =  req.params.id,   
      data.pregunta      =  req.body.pregunta,
      data.alternativa_1 =  req.body.alternativa_1,
      data.alternativa_2 =  req.body.alternativa_2,
      data.alternativa_3 =  req.body.alternativa_3,
      data.alternativa_4 =  req.body.alternativa_4,
  		data.save(function(err) {
  			if(!err) {
  				//console.log('Updated');
  			} else {
  				//console.log('ERROR: ' + err);
  			}
  			res.send(data);
  		});
  	});
  };

  deletequestionShow = function(req, res) {
  	questionShow.findById(req.params.id, function(err, data) {
  		data.remove(function(err) {
  			if(!err) {
  				//console.log('Removed');
  			} else {
  				//console.log('ERROR: ' + err);
  			}
  		})
  	});
  };

  //Link routes and functions
  app.get('/question/last', findLast);
  app.get('/questions', findAllquestionShows);
  app.get('/question/:id', findById);
  app.post('/question', addquestionShow);
  app.put('/question/:id', updatequestionShow);
  app.delete('/question/:id', deletequestionShow);

}