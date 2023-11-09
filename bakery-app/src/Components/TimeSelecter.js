import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import {
  startDateSelecter,
  endDateSelecter,
  startTimeSelecter,
  endTimeSelecter,
  granularitySelector,
} from "./store/selecterSlice";

const TimeSelector = (props) => {
  const dispatch = useDispatch();
  const startDate = useSelector((store) => store.timeSelectors.startDate);
  const endDate = useSelector((store) => store.timeSelectors.endDate);
  const startTIme = useSelector((store) => store.timeSelectors.starTIme);
  const endTime = useSelector((store) => store.timeSelectors.endTime);
  const granularity = useSelector((store) => store.timeSelectors.granularity);

  // const [granularity, setGranularity] = useState("hour");

  const handleStartDateChange = (event) => {
    dispatch(startDateSelecter(event.target.value));
  };

  const handleEndDateChange = (event) => {
    dispatch(endDateSelecter(event.target.value));
  };

  const handleGranularityChange = (event) => {
    dispatch(granularitySelector(event.target.value));
  };

  const handleStartTimeChange = (event) => {
    dispatch(startTimeSelecter(event.target.value));
  };
  const handleEndTimeChange = (event) => {
    dispatch(endTimeSelecter(event.target.value));
  };
  return (
    <div className="time-selector">
      <div className="labelFlex">
        <label>Start Date:</label>
        <label>End Date:</label>
        <label htmlFor=""> Begin time:</label>
        <label htmlFor="">End Time</label>
        <label>Granularity:</label>
      </div>
      <div className="labelFlex">
        <input type="date" value={startDate} onChange={handleStartDateChange} />

        <input type="date" value={endDate} onChange={handleEndDateChange} />

        <input
          type="time"
          name=""
          id=""
          value={startTIme}
          onChange={handleStartTimeChange}
        />

        <input
          type="time"
          name=""
          id=""
          value={endTime}
          onChange={handleEndTimeChange}
        />

        <select value={granularity} onChange={handleGranularityChange}>
          <option value="hours">Hour</option>
          <option value="day">Day</option>
          <option value="month">Month</option>
        </select>
      </div>
    </div>
  );
};

export default TimeSelector;
