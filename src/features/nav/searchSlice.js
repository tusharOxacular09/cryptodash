import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: null,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // define actions for search state here
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
