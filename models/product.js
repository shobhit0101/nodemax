const fs = require('fs');
const path = require('path');
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
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsfromfile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });

    }
    static fetchAll(cb) {
        getProductsfromfile(cb);
    }
}