var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var jwt = require('jsonwebtoken');

var cors = require('cors')

var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
const { getMaxListeners } = require('process');
const { verify } = require('crypto');

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


app.use('/pdf', verifyToken, indexRouter)


app.post('/login', (req, res) => {

  const user = {
    id: 1,
    username: "Ivan",
    email: "ivan@gmail.com"
  }

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token
    })
  })
})

function verifyToken(req, res, next) {

  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== "undefined") {

    req.token = bearerHeader

    next()
  }
  else {
    res.sendStatus(403)
  }
}

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
