const { ctrlWrapper } = require("../../helpers/index");

const getAllUsers = require("./getAllUsers");
const addUser = require("./addUser");

module.exports = {
  getAllUsers: ctrlWrapper(getAllUsers),
  addUser: ctrlWrapper(addUser),
};
