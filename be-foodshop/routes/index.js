var db = require('../connect-db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let category = [
    { id: 1, name: "Xôi lạc" },
    { id: 2, name: "Xôi dừa" },
    { id: 3, name: "Xôi ngô" },
    { id: 4, name: "Xôi đậu" },
    { id: 5, name: "Xôi trắng" }
];
console.log(category);
res.render('home');
});

module.exports = router;
