// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    user: userReducer,
  },
});

export default store;
