import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import  useReducer  from "react";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    use: useReducer,
  },
});
