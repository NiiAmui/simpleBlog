"use client";

import { configureStore } from "@reduxjs/toolkit";
// import the reducers
import reducers from "./reducers";

// setup the store with the various reducers
export const store = configureStore({
  reducer: reducers,
});
