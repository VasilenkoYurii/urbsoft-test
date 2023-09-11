const { User } = require("../../models/user");

// Функци добавления данных пользователя в базу данных
const addUser = async (req, res) => {
  const result = await User.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = addUser;
