// Функция handleMongooseError предназначена для обработки ошибок,
//  которые могут возникнуть при взаимодействии с базой данных MongoDB

const handleMongooseError = (error, data, next) => {
  error.status = 400;
  next();
};

module.exports = handleMongooseError;
