const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin.js');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getaddProducts);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postaddProducts);

// /admin/edit-product/productId => GET
router.get('/edit-product/:productId', adminController.geteditProducts);

// /admin/edit-product => POST
router.post('/edit-product', adminController.postEditProduct);

// /admin/delete-product => POST
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;