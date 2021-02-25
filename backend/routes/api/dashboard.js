const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Post, User } = require('../../db/models');

const { singlePublicFileUpload } = require ('../../awsS3.js');
const { singleMulterUpload } = require('../../awsS3.js');

router.get(
  '/', 
  handleValidationErrors, 
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      include: { model: User}
    });
    
    return res.json(posts);
}))

router.post(
  '/text',
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const {type, title, text, userId, numLikes} = req.body;
    const post = await Post.create({
      type,
      title,
      text,
      userId,
      numLikes
    });
    return res.json(post);
  })
)
router.post(
    '/image',
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
  
      await setTokenCookie(res, post);
  
      return res.json({
        post,
      });
    })
  );

  module.exports = router;