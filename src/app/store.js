import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/nav/currencySlice";
import searchReducer from "../features/nav/searchSlice";
import symbolReducer from "../features/nav/symbolSlice";
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    search: searchReducer,
    symbol: symbolReducer,
  },
});
