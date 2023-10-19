import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      allUser: null,
      isFetching: false,
      error: false,
    },
    messgae: "",
  },
  reducers: {
    getUsersStarts: (state) => {
      state.user.isFetching = true;
    },
    getUserSucces: (state, actions) => {
      state.user.isFetching = false;
      state.user.allUser = actions.payload;
      state.user.error = false;
    },
    getUserFali: (state) => {
      state.user.isFetching = false;
      state.user.error = true;
    },
  },
});
export const { getUsersStarts, getUserSucces, getUserFali } = userSlice.actions;
export default userSlice.reducer;
