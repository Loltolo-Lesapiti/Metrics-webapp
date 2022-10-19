/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  currency: [],
  error: "",
};
export const fetchRockets = createAsyncThunk("currency/fetchUsers", () =>
  axios
    .get(
      "https://financialmodelingprep.com/api/v3/fx?apikey=86a9aedd0311ac1dab63f6b5b96e0c2c"
    )
    .then((response) => response.data)
);
// Creating rocket slice.
const rocketSlice = createSlice({
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
    rocketsCancel(state, action) {
      const id = action.payload;
      const ExistingRockets = state.rockets.find((rocket) => rocket.id === id);
      if (ExistingRockets) {
        ExistingRockets.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.currency = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.currency = [];
      state.error = action.payload;
    });
  },
});

export default rocketSlice.reducer;
