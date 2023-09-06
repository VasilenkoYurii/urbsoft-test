const { User } = require("../../models/user");

const addUser = async (req, res) => {
  console.log(req.body);
  const result = await User.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = addUser;
