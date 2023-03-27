import { createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants";

const initialState = {
  token: "",
  userId: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);

      dispatch({
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();
      console.log(data);
      dispatch({
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const { getAuth } = authSlice.actions;
export default authSlice.reducer;
