const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody } = require("../../middlewares");

const { newUserSchema } = require("../../models/user");

const router = express.Router();

router.get("/", ctrl.getAllUsers);

router.post("/", validateBody(newUserSchema), ctrl.addUser);

module.exports = router;
