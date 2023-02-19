const Product = require('../models/product');

exports.getaddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'AddProduct',
        path: '/admin/add-product',
    });
}

exports.postaddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');

}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'shop',
            path: '/',
        })
    });

}