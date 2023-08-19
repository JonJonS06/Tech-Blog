const { User } = require("../models");

const userData = [
  {
    username: "Jonathan",
    password: "1106",
  },
  {
    username: "Wesley",
    password: "0304",
  },
  {
    username: "Bennett",
    password: "0327",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
