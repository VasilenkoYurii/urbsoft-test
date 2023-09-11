const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody } = require("../../middlewares");

const { newUserSchema } = require("../../models/user");

const router = express.Router();

//Маршрут получения пользователей которые оставили данные
router.get("/", ctrl.getAllUsers);

// Маршрут записи пользователей в базу данных
// имеет мидлвару для валидации данных которые приходят с клиента
router.post("/", validateBody(newUserSchema), ctrl.addUser);

module.exports = router;
