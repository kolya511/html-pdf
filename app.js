var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var cors = require('cors')

var bodyParser = require('body-parser')

var indexRouter = require('./routes/index')

var fs = require('fs');
var pdf = require('html-pdf');
var htmlFunc = require('./test/index.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use('/', indexRouter)


app.use('/', (req, res) => {
  // а де саме ти зчитуєш дані з query params?
  var html =  htmlFunc({
  param1: 11111,
  param2: 22222
  });
    pdf.create(html).toStream(function (err, stream) {
      if (err) {
        console.log(err)
      } else {
        res.set('Content-type', 'application/pdf');
        stream.pipe(res)
      }
    });
  })





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
