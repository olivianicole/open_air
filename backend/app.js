const express = require('express');
const app = express(); // initializing the express app
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const { environment } = require('./config'); // grabbing the environment variable from the index.js file in the config folder
const isProduction = environment === 'production'; // we want to check the environment and allow 'isProduction' to be true  when the environment is in production


app.use(morgan('dev')); // connecting the morgan middleware for logging information about requests and responses
app.use(cookieParser()); // used to parse cookies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // middleware for parsing JSON bodies of requests with content-type of 'application/json'
const { ValidationError } = require('sequelize');
// Security Middleware
if (!isProduction) {
    app.use(cors()); // enable cors only in development environment
};
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
    contentSecurityPolicy: false
}));

// set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        // the csurf midleware adds a method on all requests (req.csrfToken) that will be set to another cookies later on
        cookie: { // the csurf middleware adds a _csrf cookies to any server response
            secure: isProduction, 
            sameSite: isProduction && 'Lax',
            httpOnly: true, // means that it cannot be read by JS 
        },
    })
    );
    
const routes = require('./routes');
app.use(routes); // connect all the routes

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
  });


// Process sequelize errors
app.use((err, _req, _res, next) => {
// check if error is a Sequelize error:
if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
}
next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
      title: err.title || 'Server Error',
      message: err.message,
      errors: err.errors,
      stack: isProduction ? null : err.stack,
    });
  });


module.exports = app;