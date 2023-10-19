import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "user",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFail: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSucces: (state, action) => {
      state.register.isFetching = false;
      state.register.success = action.payload;
      state.register.error = false;
    },
    registerFail: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
    },
  },
});

export const {
  loginSuccess,
  loginStart,
  loginFail,
  registerStart,
  registerSucces,
  registerFail,
} = authSlice.actions;
export default authSlice.reducer;
