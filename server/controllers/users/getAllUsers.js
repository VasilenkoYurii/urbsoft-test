const { User } = require("../../models/user");

// Функция которая отдаёт всез пользователей которые есть в базе данных
const getAllUsers = async (req, res) => {
  const data = await User.find();
  res.status(200).json(data);
};

module.exports = getAllUsers;
