const express = require("express");
const bodyParser = require("body-parser")

const db = require("./connect-db");
const cors = require("cors");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
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
app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});








app.get('', function (req, res) {
    res.render('home');
});






// app.get("/", (req, res)=>{

//     const sql = "SELECT * FROM person";
//     db.query(sql, (err, data)=>{
//         if (err) return res.json("Errors");
//         return res.json(data)    ;
//     })
// })

// app.post("/add", (req, res) =>{
//     const sql = "INSERT INTO person (`username`, `password`, `city`) VALUES (?)";
//     const values = [
//         req.body.username,
//         req.body.password,
//         req.body.city
//     ]

//     db.query(sql, [values], (err, data)=>{
//         if (err) return res.json("Errors");
//         return res.json(data)    ;
//     })
// })


// app.put('/update/:id', (req, res) =>{
//     const sql = "Update person Set `username` = ? , `password` = ?, `city` =? where pid = ?";
//     const values = [
//         req.body.username,
//         req.body.password,
//         req.body.city,
//     ]
//    const id = req.params.id

//     db.query(sql, [...values, id], (err, data)=>{
//         if (err) return res.json("Errors");
//         return res.json(data)    ;
//     })
// })


app.listen(8081, () => {
    console.log("Listening: 8081");

})
