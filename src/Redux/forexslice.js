/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  currency: [],
  error: "",
};
export const url="https://financialmodelingprep.com/api/v3/fx?apikey=86a9aedd0311ac1dab63f6b5b96e0c2c"
export const fetchCurrencies = createAsyncThunk("currency/fetchUsers", () =>
  axios
    .get(
      url
    )
    .then((response) => response.data)
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
