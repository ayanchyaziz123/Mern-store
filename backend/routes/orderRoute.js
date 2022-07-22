const express = require('express');
const router = express.Router();
const checkLogIn = require('../middleware/checkLogIn');



const {myOrders, createOrder, orderDetails} = require('../controllers/orderController');



router.route('/createOrder').post(checkLogIn ,createOrder);
router.route('/orderDetails/:id').get(checkLogIn, orderDetails);
router.route('/myOrders').get(checkLogIn, myOrders);

module.exports = router;