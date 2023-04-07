import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const ReducerCars = createReducer(initialstate, {
    addcarsRequest: (state) => {
    state.loading = true;
  },
  addcarsSuccess: (state, action) => {
    state.loading = false;
    state.car = action.payload;
  },
  addcarsFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // get cars 
  getcarsRequest: (state) => {
    state.loading = true;
  },
  getcarsSuccess: (state, action) => {
    state.loading = false;
    state.cars = action.payload;
  },
  getcarsFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // delete one item 
  deleteoneRequest: (state) => {
    state.loading = true;
  },
  deleteoneSuccess: (state, action) => {
    state.loading = false;
    state.car = action.payload;
  },
  deleteoneFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // delete all item 
  deleteallRequest: (state) => {
    state.loading = true;
  },
  deleteallSuccess: (state, action) => {
    state.loading = false;
    state.car = action.payload;
  },
  deleteallFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  // sort company 
  sortcompanyRequest: (state) => {
    state.loading = true;
  },
  sortcompanySuccess: (state, action) => {
    state.loading = false;
    state.cars = action.payload;
  },
  sortcompanyFaild: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
});
