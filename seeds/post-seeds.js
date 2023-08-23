const { Post } = require("../models");

const postData = [
  {
    title: "I'm in love!",
    content: "I really love coding!!",
    user_id: 1,
  },
  {
    title: "You gotta try this!",
    content: "React is a great tool that I use everyday.",
    user_id: 2,
  },
  {
    title: "Not all addictions are bad",
    content:
      "I never knew that coding could be so much fun. I am truly addicted.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
