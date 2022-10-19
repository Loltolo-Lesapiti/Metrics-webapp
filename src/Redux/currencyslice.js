/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  currency: [],
  error: "",
};
const baseurl="https://financialmodelingprep.com/api/v3/fx";
const apiKey="?apikey=86a9aedd0311ac1dab63f6b5b96e0c2c"
export const fetchExchange = createAsyncThunk("currency/fetchUsers", (currency) =>
  axios
    .get(`${baseurl}${currency}${apiKey}`)
    .then((response) => response.data)
);
// Creating rocket slice.
const exchangeSlice = createSlice({
  name: "currency",
  initialState,
  // Reducers for reserving and canceling a rocket.
  reducers: {
    rocketsReserve(state, action) {
      const id = action.payload;
      const ExistingRockets = state.rockets.find((rocket) => rocket.id === id);
      if (ExistingRockets) {
        ExistingRockets.reserved = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExchange.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExchange.fulfilled, (state, action) => {
      state.loading = false;
      state.currency = action.payload;
      state.error = "";
    });
    builder.addCase(fetchExchange.rejected, (state, action) => {
      state.loading = false;
      state.currency = [];
      state.error = action.payload;
    });
  },
});

export default exchangeSlice.reducer;
