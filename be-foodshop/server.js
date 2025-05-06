const express = require("express");
const bodyParser = require("body-parser")

const db = require("./connect-db");
const cors = require("cors");
var createError = require('http-errors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var memberRouter = require('./routes/member');

var categoryRouter = require('./routes/category');


const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/member', memberRouter);
app.use('/category', categoryRouter);



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







app.get('', function (req, res) {
    res.render('home');
});




app.listen(8081, () => {
    console.log("Listening: 8081");

})
