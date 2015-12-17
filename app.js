
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);


app.get('/table', routes.table);
app.get('/table/:date', routes.date);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
