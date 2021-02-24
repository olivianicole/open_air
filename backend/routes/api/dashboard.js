const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Post } = require('../../db/models');

const { singlePublicFileUpload } = require ('../../awsS3.js');
const { singleMulterUpload } = require('../../awsS3.js');


router.post(
    "/create",
    singleMulterUpload("image"),
    handleValidationErrors,
    asyncHandler(async (req, res) => {
      const {title, text, userId} = req.body;
      const image = await singlePublicFileUpload(req.file);
      const post = await Post.create({
        type: 'image',
        title,
        text,
        userId
      });
  
      setTokenCookie(res, post);
  
      return res.json({
        post,
      });
    })
  );

  module.exports = router;