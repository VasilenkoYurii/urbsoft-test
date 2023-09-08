interface UsersState {
  users: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    __v: number;
  }[];
}

export const selectUsers = (state: { users: UsersState }) => state.users.users;

export const selectIsLoading = (state: { users: { loader: boolean } }) =>
  state.users.loader;
