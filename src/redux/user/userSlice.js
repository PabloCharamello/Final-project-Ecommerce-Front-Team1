import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.id;
      state.isAdmin = action.payload.isAdmin;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      delete state.userId;
      delete state.isAdmin;
      delete state.token;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
