const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "123456",
    database: "springbootdb"
  });

  db.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting");
    } else {
        console.log("connection created with mysql successfully");
    }
});

module.exports =db;
