import { configureStore } from "@reduxjs/toolkit";
import netflixReducer from "./netflixSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    netflix: netflixReducer,
    user: userReducer,
  },
});
