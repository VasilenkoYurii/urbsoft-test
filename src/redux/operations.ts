import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { PostUserProps } from "helpers/interfaces";

axios.defaults.baseURL = "http://localhost:3001/api";

// Функци получения всех пользователей с сервера
export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// Функция отправки данных пользователя на сервер
export const postUser = createAsyncThunk(
  "users/postUser",
  async (credentials: PostUserProps, thunkAPI) => {
    try {
      const response = await axios.post("/users", credentials);

      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
