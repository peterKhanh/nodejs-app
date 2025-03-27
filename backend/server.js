const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "123456",
    database: "springmvc"
  });
// executing connection
db.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting");
    } else {
        console.log("connection created with mysql successfully");
    }
});

app.get("/", (req, res)=>{

    const sql = "SELECT * FROM person";
    db.query(sql, (err, data)=>{
        if (err) return res.json("Errors");
        return res.json(data)    ;
    })
})

app.post("/add", (req, res) =>{
    const sql = "INSERT INTO person (`username`, `password`, `city`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.password,
        req.body.city
    ]
   
    db.query(sql, [values], (err, data)=>{
        if (err) return res.json("Errors");
        return res.json(data)    ;
    })
})


app.put('/update/:id', (req, res) =>{
    const sql = "Update person Set `username` = ? , `password` = ?, `city` =? where pid = ?";
    const values = [
        req.body.username,
        req.body.password,
        req.body.city,
    ]
   const id = req.params.id

    db.query(sql, [...values, id], (err, data)=>{
        if (err) return res.json("Errors");
        return res.json(data)    ;
    })
})


app.delete('/delete/:id', (req, res) =>{
    const sql = "Delete from person where pid = ?";
  
   const id = req.params.id
   
    db.query(sql, [id], (err, data)=>{
        if (err) return res.json("Errors");
        return res.json(data)    ;
    })
})


app.listen(8081, ()=>{
    console.log("Listening: 8081");
    
})
