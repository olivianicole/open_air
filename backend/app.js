const express = require('express');
const app = express(); // initializing the express app
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config'); // grabbing the environment variable from the index.js file in the config folder
const isProduction = environment === 'production'; // we want to check the environment and allow 'isProduction' to be true  when the environment is in production


app.use(morgan('dev')); // connecting the morgan middleware for logging information about requests and responses
app.use(cookieParser()); // used to parse cookies
app.use(express.json()); // middleware for parsing JSON bodies of requests with content-type of 'application/json'

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


module.exports = app;