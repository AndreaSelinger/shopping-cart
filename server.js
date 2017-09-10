var express = require('express');
var app = express();

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.get('/', function(request, response){
    response.send(__dirname + "/index.html");
  });

app.listen(8000);