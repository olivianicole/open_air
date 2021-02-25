'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING,
    video: DataTypes.STRING,
    numLikes: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' });
  };






  // accepts an object with a username, type, title, text
  // creates a post with the type, title, text, userId, and numLikes
  // returns the created post
  User.postText = async function ({ type, title, text, userId, numLikes }) {
    
    const post = await Post.create({
      type,
      title,
      text,
      userId,
      numLikes
    });
    return await Post.findByPk(post.id);
  };




  return Post;
};




