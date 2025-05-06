var express = require('express');
var router = express.Router();
const  userController  = require('../controllers/userController')


router.get('/dangky', userController.register)

router.post('/save', userController.postNewUser)

router.get('/thanhcong', userController.success)


router.get('/dangnhap', userController.loginform)
router.post('/login', userController.login)

module.exports = router;
