import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./forexslice";
import  exchangeSlice from "./currencyslice";

const store = configureStore({
  reducer: {
    currency: rocketSlice,
    exchange:exchangeSlice,
  },
});

export default store;
