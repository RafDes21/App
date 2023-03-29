import { createSlice } from "@reduxjs/toolkit";
import Diary from "../../model/diary";

const initialState = {
  diary: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiary: (state, action) => {
      const newEvent = action.payload;
      state.diary.push(newEvent);
    },
    setDiary: (state, action) => {
      state.diary = action.payload;
    },
  },
});

export const { addDiary, setDiary } = diarySlice.actions;
export default diarySlice.reducer;
