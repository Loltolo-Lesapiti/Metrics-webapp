/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  currency: [],
  error: "",
};

export const fetchCurrencies = createAsyncThunk(
  "currency/fetchUsers",
  async () => (
    {
      ticker: "EUR/USD",
      bid: "0.98384",
      ask: "0.98384",
      open: "0.97861",
      low: "0.97049",
      high: "0.98680",
      changes: 0.005344314895617323,
      date: "2022-10-21 14:33:05",
    },
    {
      ticker: "USD/JPY",
      bid: "148.246",
      ask: "148.246",
      open: "150.152",
      low: "146.183",
      high: "151.947",
      changes: -0.012693803612339348,
      date: "2022-10-21 14:33:05",
    }
  )
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.loading = false;
      state.currency = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCurrencies.rejected, (state, action) => {
      state.loading = false;
      state.currency = [];
      state.error = action.payload;
    });
  },
});

export default currencySlice.reducer;
