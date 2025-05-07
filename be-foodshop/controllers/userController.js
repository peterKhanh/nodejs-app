var db = require('../connect-db');

// Show add new category form
exports.getAllUser = (req, res, next) => {
    let category = [
        { id: 1, name: "Xôi lạc" },
        { id: 2, name: "Xôi dừa" },
        { id: 3, name: "Xôi ngô" },
        { id: 4, name: "Xôi đậu" },
        { id: 5, name: "Xôi trắng" }
    ];
    console.log(category);
    
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        res.render('user/users', {
            title: "Danh sách User",
            data: data,
            totalPage: 6
        });
    
    })
}


// Show form upload
exports.upload = (req, res, next) => {
    res.render('user/upload');
  }
  
  


// Show add new user form
exports.register = (req, res, next) => {
  res.render('user/register');
}


exports.loginform = (req, res, next) => {
    res.render('user/login');
  }
  
exports.success = (req, res, next) => {
    if (req.session.daDangNhap) {

    res.render('/',{un:req.session.username});
}
else {       
    req.session.back= req.originalUrl;

   res.redirect("/member/dangnhap");
}
  }
// Action Post new Category
exports.postNewUser = (req, res, next) => {

    let u = req.body.username;
    let p = req.body.password;
    let em = req.body.email;  
    let user_info ={username: u, password:p, email:em};  
    console.log(user_info);
  
   
    const bcrypt = require("bcrypt");        
    var salt = bcrypt.genSaltSync(10);
    var pass_mahoa = bcrypt.hashSync(p, salt);
    const sql = "INSERT INTO users (`username`, `password`, `email`) VALUES (?)";
    const values = [
        u,pass_mahoa,em
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Errors");
        } else {
            res.redirect("/member/dangnhap");
        }
    })
}
exports.login = (req, res, next) => {

    let u = req.body.username;
    let p = req.body.password;
    let user_info ={username: u, password:p};  
    console.log(user_info);
    let sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, u , (err, rows) => {   
        if (rows.length<=0) { 
            res.redirect("/member/dangnhap"); 
            return;
        }
        let user = rows[0];        
        let pass_fromdb = user.password;        
        const bcrypt = require("bcrypt");        
        let kq = bcrypt.compareSync(p, pass_fromdb);
        if (kq){ 
            console.log("OK");      
            var sess = req.session;  //initialize session variable
            sess.daDangNhap = true;
            sess.username = user.username;               
//            res.redirect("/member/thanhcong");
if (sess.back){ 
    console.log(sess.back);
    res.redirect(sess.back);
}
else {
    res.redirect("/");
}
        }   
        else {
            console.log("Not OK");
            res.redirect("/member/dangnhap");
        }
    });   



} 

