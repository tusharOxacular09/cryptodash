import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "INR",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
