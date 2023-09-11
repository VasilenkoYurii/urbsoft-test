import { UsersState } from "helpers/interfaces";


export const selectUsers = (state: { users: UsersState }) => state.users.users;

export const selectIsLoading = (state: { users: { loader: boolean } }) =>
  state.users.loader;
