import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "Pablo Charamello",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      state.email = "";
      state.username = "";
      state.token = "";
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
