import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { PostUserProps } from "helpers/interfaces";

axios.defaults.baseURL = "http://localhost:3001/api";

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
