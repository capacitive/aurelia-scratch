var port  = 7006;
var http = require('http');
var cors = require('cors');
var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect()
		  .use(cors())
		  .use(serveStatic('./'))
		  .use(function(req, res){
			  //res.setHeader("Access-Control-Allow-Origin","http://qajonas.chodev.com");
			  //res.setHeader("Origin", "http://qajonas.chodev.com");
			  res.end('end\n');
			  });
		  
var server = http.createServer(app);
server.listen(port, function(){
 	console.log('Server listening on port: ' + port);
 });