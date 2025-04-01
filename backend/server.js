const express = require("express");
const bodyParser = require("body-parser")

const db = require("./connect-db");
const cors = require("cors");

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({
    extended:false
}))




app.get('/danh-muc', function(req, res){
    let category = [
        {id: 1, name : "Xôi lạc"},
        {id: 2, name : "Xôi dừa"},
        {id: 3, name : "Xôi ngô"},
        {id: 4, name : "Xôi đậu"},
        {id: 5, name : "Xôi trắng"}
    ];
    
    const sql = "SELECT * FROM person";
    db.query(sql, (err, data)=>{
        
    res.render('category/categories', {
        title: "Quản lý danh mục",
        data: data,
        totalPage : 6
    });
    console.log(data);

})
});

app.get('/them-danh-muc', (req, res) => {
    res.render('category/add-category');
});

app.post('/them-danh-muc', (req, res) => {
    console.log(req.body);
    
});

app.get('', function(req, res){
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


app.get('/xoa-danh-muc/:id', (req, res) =>{
    const sql = "Delete from person where pid = ?";
  
   const id = req.params.id
   
    db.query(sql, [id], (err, data)=>{
        if (err) 
            {
                return res.json("Errors");
            }else{
        res.redirect("/danh-muc")    ;
            }
    })
})

app.listen(8081, ()=>{
    console.log("Listening: 8081");
    
})
