const path = require("path");
const multer = require("multer");
var express = require('express');
var router = express.Router();
const  userController  = require('../controllers/userController')


// Multer disk storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

// Define maximum upload file size (1 MB)
const maxSize = 1 * 1000 * 1000;

// Configure Multer
const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the following filetypes - " + filetypes);
    }
}).single("mypic"); 




/* GET users listing. */
router.get('/', userController.getAllUser)



router.get('/upload', userController.upload)

router.post("/uploadProfilePicture", function (req, res, next) {
	// Error MiddleWare for multer file upload, so if any
	// error occurs, the image would not be uploaded!
	upload(req, res, function (err) {
		if (err) {
			// ERROR occurred (here it can be occurred due
			// to uploading image of size greater than
			// 1MB or uploading different file type)
			res.send(err);
		} else {
			// SUCCESS, image successfully uploaded
			res.send("Success, Image uploaded!");
		}
	});
});

module.exports = router;
