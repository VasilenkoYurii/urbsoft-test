import { createSlice } from "@reduxjs/toolkit";

import { succesNotify, errorNotfy } from "helpers/notification";
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
        state.loader = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.loader = false;

        state.users = payload;
      })
      .addCase(getAllUsers.rejected, (state, _) => {
        state.loader = false;
        errorNotfy();
      })
      .addCase(postUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        succesNotify();
      })
      .addCase(postUser.rejected, () => {
        errorNotfy();
      });
  },
});

export const usresReducer = usersSlice.reducer;
