// app.js

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');


var indexRouter = require('./routes/index'); // Ensure this path is correct
var usersRouter = require('./routes/users'); // Ensure this path is correct

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // Route for the home page
app.use('/users', usersRouter); // Route for /users


// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); // Use the createError function here
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
