const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const nameRegexp = /^.{3,}$/;

// Схема пользователя которая записываеться в базу данных
const userSchema = new Schema({
  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    match: nameRegexp,
    required: [true, "Name is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is requires"],
  },
});

userSchema.post("save", handleMongooseError);

// Схема валидации данных которые приходят с клиента
const newUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  name: Joi.string().pattern(nameRegexp).required(),
  phone: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  newUserSchema,
};
