import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./forexslice";

const store = configureStore({
  reducer: {
    currency: rocketSlice,
  },
});

export default store;
