import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");

      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

interface PostUserProps {
  name: string;
  email: string;
  phone: string;
}

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
