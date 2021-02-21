const express = require('express');
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');


const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
router.use('/session', sessionRouter);
router.use('/users', usersRouter);



// backend/routes/index.js

const apiRouter = require('./api');

router.use('/api', apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
            );
        });
        
        // Serve the static assets in the frontend's build folder
        router.use(express.static(path.resolve("../frontend/build")));
        
        // Serve the frontend's index.html file at all other routes NOT starting with /api
        router.get(/^(?!\/?api).*/, (req, res) => {
            res.cookie('XSRF-TOKEN', req.csrfToken());
            res.sendFile(
                path.resolve(__dirname, '../../frontend', 'build', 'index.html')
                );
            });
        }
        
        // Add a XSRF-TOKEN cookie in development
        if (process.env.NODE_ENV !== 'production') {
            router.get('/api/csrf/restore', (req, res) => {
                res.cookie('XSRF-TOKEN', req.csrfToken());
                res.status(201).json({});
            });
        }
        
        module.exports = router;
