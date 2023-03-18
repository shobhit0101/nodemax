const express = require('express');
const path = require('path');


const router = express.Router();
const shopController = require('../controllers/shop.js');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-product', shopController.postDeleteCartProduct);

router.get('/orders', shopController.getOrders);

router.get('/chceckout', shopController.getCheckout);

module.exports = router;




