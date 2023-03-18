const fs = require('fs');
const path = require('path');
const Cart = require('./cart');


const p = path.join(
    path.dirname(require.main.filename),
    'Data',
    'products.json'
);

const getProductsfromfile = cb => {

    fs.readFile(p, (err, filecontent) => {
        if (err) {
            return cb([]);
        }
        else
            cb(JSON.parse(filecontent));

    })
}

module.exports = class Product {
    constructor(id, title, imageURL, price, description,) {
        this.id = id;
        this.title = title;
        this.ImageURL = imageURL;
        this.price = price;
        this.description = description;

    }

    save() {

        getProductsfromfile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }

        });

    }

    static deletebyid(id) {
        getProductsfromfile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            console.log(product);
            console.log(updatedProducts);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            })
        });
    }

    static fetchAll(cb) {
        getProductsfromfile(cb);
    }


    static findById(id, cb) {
        getProductsfromfile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
};