import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './forexslice';

const store = configureStore({
  reducer: {
    currency: currencySlice,
  },
});

export default store;
