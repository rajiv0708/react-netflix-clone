import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getActiveUser: (state, actions) => {
      state.userEmail = actions.payload;
    },
  },
});

export const { getActiveUser } = userSlice.actions;

export default userSlice.reducer;
