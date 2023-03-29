import { getDiary, insertDiary } from "../../db";
import Diary from "../../model/diary";
import { addDiary, setDiary } from "./diary.slice";

export const saveDiary = (name, image, description, date) => {
  return async (dispatch) => {
    const result = await insertDiary(name, image, description, date);

    const newEvent = new Diary(
      (id = result.insertId),
      date,
      name,
      image,
      description
    );
    dispatch(addDiary(newEvent));
  };
};

export const loadDiary = () => {
  return async (dispatch) => {
    try {
      const result = await getDiary();
      dispatch(setDiary(result?.rows?._array));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};
