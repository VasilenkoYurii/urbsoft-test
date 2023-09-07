export const selectIsLoggedIn = (state: {
  users: {
    users: {
      _id: string;
      name: string;
      email: string;
      phone: string;
      __v: number;
    }[];
  };
}) => state.users.users;
