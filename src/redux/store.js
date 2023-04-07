import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ReducerCars } from "./reducer/carsReducer";
import { ReducerUser } from "./reducer/userReducer";
const reducer = combineReducers({
  // here we will be adding reducers
  ReducerUser,
  ReducerCars,
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore(
  {
    reducer,
  },
  customizedMiddleware
);
export default store;
