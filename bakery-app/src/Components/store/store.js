import { configureStore } from "@reduxjs/toolkit";
import selecterSlice from "./selecterSlice";
import graphSelectionSlice from "./graphSelectionSlice";
export const store = configureStore({
  reducer: {
    timeSelectors: selecterSlice,
    graphSelector: graphSelectionSlice,
  },
});
