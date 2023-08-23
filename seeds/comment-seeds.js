const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "That's great!!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Any other suggestions?",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Meetings are every other Thursday. 😉",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
