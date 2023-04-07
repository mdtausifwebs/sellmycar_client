import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const ReducerUser = createReducer(initialstate, {
    signupRequest: (state) => {
    state.loading = true;
  },
  signupSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  signupFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  loginuserRequest: (state) => {
    state.loading = true;
  },
  loginuserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  loginuserFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  logoutFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getuserRequest: (state) => {
    state.loading = true;
  },
  getuserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  getuserFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
