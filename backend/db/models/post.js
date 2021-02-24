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
    // associations can be defined here
  };
  return Post;
};