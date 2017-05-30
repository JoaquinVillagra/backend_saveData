var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Servicio Desplegado con éxito!");
});

routes = require('./routes/userShow')(app);
routes = require('./routes/dataShow')(app);

mongoose.connect('mongodb://138.197.22.39/Solar', function(err, res) {
	if(err) {
		//console.log('ERROR: connecting to Database. ' + err);
	} else {
		//console.log('Connected to Database');
	}
});

server.listen(3030, function() {
  //console.log("Node server running on http://localhost:3030");
});
