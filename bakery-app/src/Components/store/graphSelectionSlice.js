import { createSlice } from "@reduxjs/toolkit";

const graphSelection = createSlice({
  name: "graphSelections",
  initialState: {
    noOfOrders: "noOfOrders",
    totalValue: "totalValue",
    firstGraph: false,
    secondGraph: false,
  },
  reducers: {
    noOfOrdersSelector: (state, action) => {
      state.noOfOrders = action.payload;
    },
    totalValueSelector: (state, action) => {
      state.totalValue = action.payload;
    },
    showHideOrderGraph: (state, action) => {
      state.firstGraph = !state.firstGraph;
    },
    showHideTotalValueGraph: (state, action) => {
      state.secondGraph = !state.secondGraph;
    },
  },
});

export const {
  noOfOrdersSelector,
  totalValueSelector,
  showHideOrderGraph,
  showHideTotalValueGraph,
} = graphSelection.actions;
export default graphSelection.reducer;
