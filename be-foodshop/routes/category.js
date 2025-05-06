var express = require('express');
var router = express.Router();

const  categoryController  = require('../controllers/categoryController')

router.get('/', categoryController.getAllCate)

router.get('/addnew', categoryController.addNewCate)

router.post('/addnew', categoryController.postNewCate)

router.get('/edit/:id', categoryController.editCate)

router.post('/update', categoryController.updateCate)

router.get('/delete/:id', categoryController.deleteCate)

module.exports = router;