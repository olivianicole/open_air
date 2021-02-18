const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;


// this function sets the JWT cookie after a user is logged in or signed up
// it takes in the response and the session user and generates a JWT using the imported secret
// it is set to expire in the time set to JWT_EXPIRES_IN key in the .env file
// the payload of the JWT will be the return of the instance method .toSafeObject that you added previously to the User model
// after the JWT is created, it's set to an HTTP-only cookie on the response as a token cookie
// later used in LOGIN and SIGNUP routes
const setTokenCookie = (res, user) => {
    // Create the token.
    const token = jwt.sign(
      { data: user.toSafeObject() },
      secret,
      { expiresIn: parseInt(expiresIn) }, // 604,800 seconds = 1 week
    );
  
    const isProduction = process.env.NODE_ENV === "production";
  
    // Set the token cookie
    res.cookie('token', token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax",
    });
  
    return token;
  };



// restores the session user based on the contents of the JWT cookies
// creates a middleware function that will verify and parse the JWT's payload and search the database for a User with the id in the payload
// this query should use the currentUser scope since the hashedPassword is not needed for this operation
// if there is a User found, then save the user to a key of user onto the request
// if there is an error verifying the JWT or a User cannot be found with the id, then clear the token cookie from the response
// will be added as a pre-middleware for ROUTE HANDLERS and for the next authentication middleware
const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
        return next();
        }

        try {
        const { id } = jwtPayload.data;
        req.user = await User.scope('currentUser').findByPk(id);
        } catch (e) {
        res.clearCookie('token');
        return next();
        }

        if (!req.user) res.clearCookie('token');

        return next();
    });
    };

// this middleware is for requiring a session user to be authenticated before accessing a route
// it's defined as an array with the restoreUser middleware function above as the first element in the array
// this ensures that if a valid JWT cookie exists, the session user will be loaded into the req.user attribute
// the second middleware will check req.user and will go to the next middleware if there is a session user present there
// if there is no session user, then an error will be created and passed along to the error-handling middlewares
// will be applied as pre-middleware to ROUTE HANDLERS where needed 
// If there is no current user, return an error
const requireAuth = [
    restoreUser,
    function (req, res, next) {
      if (req.user) return next();
  
      const err = new Error('Unauthorized');
      err.title = 'Unauthorized';
      err.errors = ['Unauthorized'];
      err.status = 401;
      return next(err);
    },
  ];

module.exports = { setTokenCookie, restoreUser, requireAuth };
    