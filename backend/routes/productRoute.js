const express = require('express');
const router = express.Router();
var multer = require('multer');
const checkLogIn = require('../middleware/checkLogIn');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });
  
  
  // The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
  // You can create multiple middleware each with a different storage engine config so save different files in different locations on server
  const upload = multer({ storage: fileStorageEngine });

const {createReview ,getProducts, createProduct, getProduct, imageUpload, updateProduct, offerProduct, deleteProduct} = require('../controllers/productController');


router.route('').get(getProducts);
router.route('/createProduct').post(createProduct);
router.route('/getProduct/:id').get(getProduct); // for admin
router.route('/imageUpload').post(upload.single('image'), imageUpload);
router.route('/updateProduct/:id').put(updateProduct);
router.route('/deleteProduct/:id').delete(deleteProduct);
router.route('/offerProduct').get(offerProduct);
router.route('/:id/createReview').post(checkLogIn ,createReview);

module.exports = router;