import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isOk: undefined,
  message: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    doLogin() {},
    doLogout() {},

    authSuccess(state, action) {
      return action.payload;
    },

    authFail(state, action) {
      return action.payload;
    },

    resetAuthMessage(state) {
      return { ...state, isOk: undefined, message: undefined };
    },
  },
});

export const { doLogin, doLogout, authSuccess, authFail } = authSlice.actions;

export default authSlice.reducer;
