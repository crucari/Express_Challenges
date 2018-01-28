var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Hello world');
});
app.get('/name', function(request, response) {
	var name = 'Carina';
	response.redirect(301, '/surprise');
	response.send(name);
});
app.get('/date', function(request, response) {
	var date = new Date();
	response.send('It is ' + date);
});
app.listen(process.env.PORT);