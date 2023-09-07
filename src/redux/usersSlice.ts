import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import { getAllUsers, postUser } from "./operations";

interface InitialState {
  users: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    __v: number;
  }[];
  loader: boolean;
}

const initialState: InitialState = {
  users: [],
  loader: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        // state.users = payload;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        console.log(payload);

        // state.users = payload;
      })
      .addCase(getAllUsers.rejected, () => {
        toast.error("Something went wrong, please try again.", {
          style: {
            width: "300px",
            height: "40px",
            borderRadius: "10px",
            fontSize: "20px",
          },
        });
      })
      .addCase(postUser.pending, (state, { payload }) => {
        console.log("panding");

        // state.users = payload;
      })
      .addCase(postUser.fulfilled, (state, { payload }) => {
        console.log(payload);

        // state.users = payload;
      })
      .addCase(postUser.rejected, () => {
        toast.error("Something went wrong, please try again.", {
          style: {
            width: "300px",
            height: "40px",
            borderRadius: "10px",
            fontSize: "20px",
          },
        });
      });
  },
});

export const usresReducer = usersSlice.reducer;
