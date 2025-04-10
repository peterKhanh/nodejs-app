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
    extended: false
}))




app.get('/danh-muc', function (req, res) {
    let category = [
        { id: 1, name: "Xôi lạc" },
        { id: 2, name: "Xôi dừa" },
        { id: 3, name: "Xôi ngô" },
        { id: 4, name: "Xôi đậu" },
        { id: 5, name: "Xôi trắng" }
    ];

    const sql = "SELECT * FROM categories";
    db.query(sql, (err, data) => {

        res.render('category/categories', {
            title: "Quản lý danh mục",
            data: data,
            totalPage: 6
        });
    //    console.log(data);

    })
});

app.get('/them-danh-muc', (req, res) => {
    res.render('category/add-category');
});



app.get('/sua-danh-muc/:id', (req, res) => {
    let id = req.params.id
    console.log(id);
      // res.send('Form chỉnh loại' + id);
      let sql = `SELECT id, category_name, category_status FROM categories where id=${id}`;
      console.log(sql);
      
      db.query(sql, function (err, data) {
          console.log(data);
          res.render("category/edit-category", { cate: data[0] });
      });
});


app.post('/them-danh-muc', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.status);
    const sql = "INSERT INTO categories (`category_name`, `category_status`) VALUES (?)";
    const values = [
        req.body.name, true
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Errors");
        } else {
            res.redirect("/danh-muc");
        }
    })
});

app.post('/update', function (req, res, next) {
    //nhận dữ liệu từ edit để cập nhật vào db
    console.log(req.body.name  + "  :   "  + req.body.id);
    let id = req.body.id;

    let name = req.body.name;
    // console.log(req.body.status);
    // let sql = `UPDATE categories SET category_name= ${name} WHERE id=${id}`;
    // db.query(sql, function (err, data) {
    //     console.log(data);
    //     if (err) {
    //         return res.json("Errors");
    //     } else {
    //         res.redirect("/category");
    //     }
    // });


 //nhận dữ liệu từ edit để cập nhật vào db
     
 db.query(`UPDATE categories SET category_name = ? WHERE id = ?`,  [name, id], 
    function(err, data) {    
        if (err) throw err;
        if (data.affectedRows==0) {
        console.log(`Không có id loại ${id} để cập nhật`);
     }
     res.redirect("/danh-muc/");
})




// db.query(`UPDATE books SET title=?,price=? WHERE id = ?`,  [t, p, id], 
// function(err, data) {    
//    if (err) throw err;
//    if (data.affectedRows == 0) {
//         console.log(`Không có id book để cập nhật: ${id}`);
//    }       
//    res.redirect('/books');
// })



});


app.get('', function (req, res) {
    res.render('home');
});



app.get('/xoa-danh-muc/:id', (req, res) => {
    const sql = "Delete from categories where id = ?";

    const id = req.params.id

    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json("Errors");
        } else {
            res.redirect("/danh-muc");
        }
    })
})



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
