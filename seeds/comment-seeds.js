const { Comment } = require('../models');

const commentSeed = [
  {
    comment_text: "This tools is a nice technology",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Responsive web developpemnt",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "That is an exciting to see how this technology",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentSeed);

module.exports = seedComments;
