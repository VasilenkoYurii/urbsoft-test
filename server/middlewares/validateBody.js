const { HttpError } = require("../helpers");

// Мидлвара для валидации данных пользователя которые приходят с клиента,
// если данные не проходят проверку, функция возвращает ошибку на клиент,
// если данные проходят проверку продолжает выполнение функции
const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
