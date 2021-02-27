const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Post, User } = require('../../db/models');

const { singlePublicFileUpload } = require ('../../awsS3.js');
const { singleMulterUpload } = require('../../awsS3.js');
const { restoreUser } = require('../../utils/auth.js');

router.get(
  '/', 
  handleValidationErrors, 
  restoreUser,
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      include: { model: User}
    });
  
    return res.json(posts);
}))

router.post(
  '/text',
  handleValidationErrors,
  restoreUser,
  asyncHandler(async (req, res) => {
    const {type, title, text, userId, numLikes} = req.body;
    const user = await User.findByPk(userId);
    const newPost = await Post.create({
      type,
      title,
      text,
      userId,
      numLikes,
    });
    const post = await Post.findOne({
      where: { id: newPost.id },
      include: { model: User}
    });
    await setTokenCookie(res, user);
    return res.json({post});
  })
)

router.post(
    '/image',
    singleMulterUpload("image"),
    handleValidationErrors,
    restoreUser,
    asyncHandler(async (req, res) => {
      
      const {type, title, text, userId, numLikes} = req.body;
      const user = await User.findByPk(userId);

      const imageUrl = await singlePublicFileUpload(req.file);

      const newPost = await Post.create({
        type,
        title,
        text,
        image: imageUrl,
        userId,
        numLikes,
      });
      const post = await Post.findOne({
        where: { id: newPost.id, image: newPosit.image },
        include: { model: User }
      });
      await setTokenCookie(res, user);
      return res.json({post});
    })
  );

  router.post(
    '/link',
    handleValidationErrors,
    restoreUser,
    asyncHandler(async (req, res) => {

      const { type, title, text, link, userId, numLikes } = req.body;
      const user = await User.findByPk(userId);

      const newPost = await Post.create({
        type,
        title,
        text,
        link,
        userId,
        numLikes,
      });
      const post = await Post.findOne({
        where: { id: newPost.id },
        include: { model: User }
      });
      await setTokenCookie(res, user);
      return res.json({post});
    })
  )

  module.exports = router;