var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var userHome= require('./routes/HomePageRoute');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

<<<<<<< HEAD
// app.use('/home',index);
// app.use('/adminhomepage',index);

=======
app.use('/home',indexRouter);
app.use('/adminhomepage', indexRouter);
app.use('/signup',indexRouter);
app.use('/users/add',indexRouter);
>>>>>>> fccda74fc8c9c9583efb90d00c55a32e847bc8e2

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);


module.exports = app;
