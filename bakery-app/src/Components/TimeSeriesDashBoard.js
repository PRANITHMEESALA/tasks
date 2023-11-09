import React, { useState } from "react";
import TimeSelector from "./TimeSelecter";
import TimeSeriesChart from "./TimeSeriesChart";
import { useSelector } from "react-redux";
const Dashboard = ({ data }) => {
  const startDate = useSelector((store) => store.timeSelectors.startDate);
  const endDate = useSelector((store) => store.timeSelectors.endDate);
  const startTime = useSelector((store) => store.timeSelectors.startTime);
  const endTime = useSelector((store) => store.timeSelectors.endTime);
  const noOfOrders = useSelector((store) => store.graphSelector.firstGraph);
  const totalValue = useSelector((store) => store.graphSelector.secondGraph);
  const granularity = useSelector((store) => store.timeSelectors.granularity);
  const [updatedData, setUpdatedData] = useState([]);
  const [isSubmited, setIsSubmitted] = useState(false);

  const filterHandler = () => {
    let startDateIndex, endDateIndex;
    if (
      startDate &&
      endDate &&
      startTime &&
      endTime &&
      (noOfOrders || totalValue || (noOfOrders && totalValue && granularity))
    ) {
      setIsSubmitted(true);
      data.map((ele, index) => {
        const year = new Date(ele.lastUpdatedDate).getFullYear();
        const month = (new Date(ele.lastUpdatedDate).getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const day = new Date(ele.lastUpdatedDate)
          .getDate()
          .toString()
          .padStart(2, "0");
        ele["hours"] = Math.floor(Math.random() * 24);
        ele["day"] = day;
        ele["month"] = month;
        ele.lastUpdatedDate = `${year}-${month}-${day}`;
      });
      startDateIndex = data.findIndex(
        (el, index) => el.lastUpdatedDate === startDate
      );
      endDateIndex = data.findIndex(
        (el, index) => el.lastUpdatedDate === endDate
      );
      endDateIndex = endDateIndex + 1;
    }
    setUpdatedData(data.slice(startDateIndex, endDateIndex));
    let getStartHourArray = startTime.split(":");
    let getStartHour = parseInt(getStartHourArray[0]);
    let startTimeIndex = updatedData.findIndex(
      (el, index) => el.hours === getStartHour
    );
    let getEndTimeArray = endTime.split(":");
    let getEndHour = parseInt(getEndTimeArray[0]);
    let endTimeIndex = updatedData.findIndex(
      (el, index) => el.hours === getEndHour
    );
    console.log(updatedData);
    console.log(startTimeIndex);
  };
  return (
    <div>
      <TimeSelector />
      <TimeSeriesChart
        data={isSubmited ? updatedData : data}
        showHide1={isSubmited ? noOfOrders : false}
        showHide2={isSubmited ? totalValue : false}
        isSubmited={isSubmited}
        submitHandler={filterHandler}
        granularity={granularity}
      />
    </div>
  );
};

export default Dashboard;
