const express = require('express');
const asyncHandler = require('express-async-handler');


const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Post } = require('../../db/models');

import { singlePublicFileUpload } from '../../../awsS3.js';

router.post(
    "/image",
    singleMulterUpload("image"),
    handleValidationErrors,
    asyncHandler(async (req, res) => {
      const { type, title, text, userId} = req.body;
      const image = await singlePublicFileUpload(req.file);
      const post = await User.signup({
        type: 'image',
        title,
        text,
        userId
      });
  
      setTokenCookie(res, user);
  
      return res.json({
        post,
      });
    })
  );