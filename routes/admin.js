const express = require('express');
const path = require('path');

const productscontroller = require('../controllers/products.js');

const router = express.Router();


router.get('/add-product', productscontroller.getaddProducts);
router.post('/add-product', productscontroller.postaddProducts);

module.exports = router;