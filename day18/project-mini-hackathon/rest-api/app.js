
// by RazmanR  
// by RazmanR, Team3 date 14/1/24
// minihackathon assignment-
//  mobile phone gagdet web app



// express is a framework 
// add import
const express = require('express');
const morgan = require('morgan');
// bodyparser

const bodyparser = require('body-parser');

const app = express();

const productRoutes = require('./api/routes/products');


// bodyparser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/products', productRoutes);

// error handling =-=-
    // SHOW ERROR, custom MESSAGE

app.use(morgan('dev'));

app.use((req, res, next) => {
    // SHOW ERROR, custom MESSAGE
    const error = new Error('some error msg, not found');
    error.status404;

    // go to next error
    next(error);

});

//pass error to here
app.use((error, req, res, next) => {
    // error status 500
    res.status( error.status || 500);
    res.json({
        error: {
            message: error.message
        }

    });

});

module.exports = app;

