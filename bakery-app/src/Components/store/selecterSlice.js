import { createSlice } from "@reduxjs/toolkit";

const selecterSlice = createSlice({
  name: "selector",
  initialState: {
    granularity: "hours",
  },

  reducers: {
    startDateSelecter: (state, action) => {
      state.startDate = action.payload;
    },
    endDateSelecter: (state, action) => {
      state.endDate = action.payload;
    },

    startTimeSelecter: (state, action) => {
      state.startTime = action.payload;
    },
    endTimeSelecter: (state, action) => {
      state.endTime = action.payload;
    },
    granularitySelector: (state, action) => {
      state.granularity = action.payload;
    },
  },
});

export const {
  startDateSelecter,
  endDateSelecter,
  startTimeSelecter,
  endTimeSelecter,
  granularitySelector,
} = selecterSlice.actions;
export default selecterSlice.reducer;
