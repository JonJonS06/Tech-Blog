const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I really love coding!!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "React is a great tool that I use everyday.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "I never knew that coding could be so much fun. I am truly addicted.",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
