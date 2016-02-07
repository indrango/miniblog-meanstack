var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var config = require('./app/config/config');

if (process.env.NODE_ENV === 'development')
  app.use(morgan('dev'));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app'));

// connect db
mongoose.connect(config.database, function(err) {
  if (err)
    console.log('Connection failed!');
});

// route
require('./app/routes/route')(app);

app.listen(config.port);
console.log('miniblog-meanstack running at http://localhost:' + config.port);
