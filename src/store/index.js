import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import diaryReducer from "./slices/diary.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
