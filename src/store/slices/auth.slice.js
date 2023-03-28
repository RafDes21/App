import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.token = action.payload.token,
      state.userId = action.payload.userId
    },
  },
});

export const { updateState } = authSlice.actions;
export default authSlice.reducer;
