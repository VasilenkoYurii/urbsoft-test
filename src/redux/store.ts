import { configureStore } from "@reduxjs/toolkit";
import { usresReducer } from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usresReducer,
  },
});
