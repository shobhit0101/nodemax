const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('logging something');
    next();
});

app.use((req, res, next) => {
    console.log('logging another time something');
    res.send('<h1>Hello its me Vital</h1>');
});


// app.use('/users', (req, res, next) => {
//     res.send('<h1>i m on "/users".</h1>');
// });
// app.use('/', (req, res, next) => {
//     res.send('<h1>I m on "/".</h1>');
// });

app.listen(7000);
