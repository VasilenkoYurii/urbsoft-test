// Функци представляет собой обёртку для других функций-контроллеров
// которые могут генерировать ошибки при выполнении.
const ctrlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      console.log(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
