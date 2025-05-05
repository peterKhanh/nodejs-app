var db = require('../connect-db');

var express = require('express');
var router = express.Router();
var db = require('../connect-db');

router.get('/', function(req, res, next) {
    let category = [
      { id: 1, name: "Xôi lạc" },
      { id: 2, name: "Xôi dừa" },
      { id: 3, name: "Xôi ngô" },
      { id: 4, name: "Xôi đậu" },
      { id: 5, name: "Xôi trắng" }
  ];
  console.log(category);
  
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, data) => {
      res.render('category/categories', {
          title: "Quản lý danh mục",
          data: data,
          totalPage: 6
      });
  
  })
  });

router.get('/addnew', function (req, res, next) {
    // res.send('Form thêm loại'); 
    res.render('category/add-category');

});
router.post('/addnew', function (req, res, next) {
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
            res.redirect("/category");
        }
    })
});
router.get('/edit/:id', function (req, res, next) {
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
router.post('/update', function (req, res, next) {
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
     res.redirect("/category");
})


});



router.get('/delete/:id', function (req, res) {
    const sql = "Delete from categories where id = ?";

    const id = req.params.id

    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json("Errors");
        } else {
            res.redirect("/category/");
        }
    })
})

module.exports = router;