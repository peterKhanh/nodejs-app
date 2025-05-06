var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  let users = [
    { id: 1, name: "Xôi lạc" },
    { id: 2, name: "Xôi dừa" },
    { id: 3, name: "Xôi ngô" },
    { id: 4, name: "Xôi đậu" },
    { id: 5, name: "Xôi trắng" }
];
console.log(users); 
res.send(users);
});

module.exports = router;
