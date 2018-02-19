
var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);

app.use('/', express.static('client'))

// router.get('/', function (req, res) {
//   res.send('client')
// })

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});

