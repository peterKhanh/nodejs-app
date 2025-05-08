var db = require('../connect-db');

// Show add new category form
exports.getAllCate = (req, res, next) => {
    let category = [
        { id: 1, name: "Xôi lạc" },
        { id: 2, name: "Xôi dừa" },
        { id: 3, name: "Xôi ngô" },
        { id: 4, name: "Xôi đậu" },
        { id: 5, name: "Xôi trắng" }
    ];
    console.log(category);
    
    const sql = "SELECT * FROM category";
    db.query(sql, (err, data) => {
        res.render('category/categories', {
            title: "Quản lý danh mục",
            data: data,
            totalPage: 6
        });
    
    })
}

// Show add new category form
exports.addNewCate = (req, res, next) => {
    res.render('category/add-category');
}

// Action Post new Category
exports.postNewCate = (req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.status);
    const sql = "INSERT INTO category (`name`, `status`) VALUES (?)";
    const values = [
        req.body.name, req.body.status
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Errors");
        } else {
            res.redirect("/category");
        }
    })
}

// Show edit category form
exports.editCate = (req, res, next) => {
    let id = req.params.id
    console.log(id);
      // res.send('Form chỉnh loại' + id);
      let sql = `SELECT id, name, status FROM category where id=${id}`;
      console.log(sql);
      
      db.query(sql, function (err, data) {
          console.log(data);
          res.render("category/edit-category", { cate: data[0] });
      });
}


// Action update Category
exports.updateCate = (req, res, next) => {
      //nhận dữ liệu từ edit để cập nhật vào db
      console.log(req.body.name  + "  :   "  + req.body.status );
      let id = req.body.id;
      let name = req.body.name;
      let status = req.body.status;
  
   //nhận dữ liệu từ edit để cập nhật vào db
       
   db.query(`UPDATE category SET name = ? , status = ? WHERE id = ?`,  [name, status, id], 
      function(err, data) {    
          if (err) throw err;
          if (data.affectedRows==0) {
          console.log(`Không có id loại ${id} để cập nhật`);
       }
       res.redirect("/category");
  })
  
}


// Action delete Category
exports.deleteCate = (req, res, next) => {
    const sql = "Delete from category where id = ?";

    const id = req.params.id

    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json("Errors");
        } else {
            res.redirect("/category/");
        }
    })

}
