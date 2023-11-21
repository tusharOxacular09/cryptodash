import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "₹" };

const symbolSlice = createSlice({
  name: "symbol",
  initialState,
  reducers: {
    setSymbol: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSymbol } = symbolSlice.actions;
export default symbolSlice.reducer;
