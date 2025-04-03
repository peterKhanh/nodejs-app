var db=require('../models/connect-db');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, data) => {

      // res.render('category/categories', {
      //     title: "Quản lý danh mục",
      //     data: data,
      //     totalPage: 6
      // });
      console.log(data);
      res.render("category/category-list",{
        
          title: "Quản lý danh mục",
          list: data,
          totalPage: 6

        }); 
  })
  // res.send('Danh sách loại');  
});
router.get('/addnew', function(req, res, next) {
    // res.send('Form thêm loại'); 
    res.render('category/add-category');

});
router.post('/addnew', function(req, res, next) {
    //nhận dữ liệu từ addnew để thêm record vào db
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
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  console.log("ID: " + id);
  
 // res.send('Form chỉnh loại' + id);
  let sql = `SELECT * FROM categories where id=${id}`;
  db.query(sql, function(err, data) {    
    res.render("category/edit-category", { cate:data[0]});    
  });


});
router.post('/update', function(req, res, next) {
    //nhận dữ liệu từ edit để cập nhật vào db
});



router.get('/delete/:id', function(req, res) {
 // res.send('Xóa loai');

 const sql = "Delete from categories where id = ?";

 const id = req.params.id

 db.query(sql, [id], (err, data) => {
     if (err) {
         return res.json("Errors");
     } else {
         res.redirect("/category");
     }
 })

});

module.exports = router;