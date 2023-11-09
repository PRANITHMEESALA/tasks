import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  noOfOrdersSelector,
  totalValueSelector,
  showHideOrderGraph,
  showHideTotalValueGraph,
} from "./store/graphSelectionSlice";

const TimeSeriesChart = ({
  data,
  showHide1,
  showHide2,
  isSubmited,
  submitHandler,
  granularity,
}) => {
  const dispatch = useDispatch();
  const noOfOrders = useSelector((store) => store.graphSelector.noOfOrders);
  const totalValue = useSelector((store) => store.graphSelector.totalValue);

  const handleNoofOrdersChange = (event) => {
    dispatch(noOfOrdersSelector(event.target.value));
    dispatch(showHideOrderGraph(isSubmited === true && showHide1));
  };

  const handletotalValueChange = (event) => {
    dispatch(totalValueSelector(event.target.value));
    dispatch(showHideTotalValueGraph(isSubmited === true && showHide2));
  };
  return (
    <div>
      <div className="graphSelection">
        <div>
          <input
            type="checkbox"
            value={noOfOrders === "noOfOrders"}
            onChange={handleNoofOrdersChange}
          ></input>
          <label htmlFor="">Number of orders</label>

          <input
            type="checkbox"
            value={totalValue === "totalValue"}
            onChange={handletotalValueChange}
          ></input>
          <label htmlFor="">Total value of orders</label>
        </div>
        <div>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
      <h1>Time Series charts </h1>
      {!isSubmited ? "To display graphs please filter and submit" : null}
      {showHide1 ? (
        <LineChart width={600} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="quantity"
            stroke="#2196F3"
            strokeWidth={5}
          />

          <XAxis
            dataKey={isSubmited ? granularity : "orderType"}
            name={granularity}
          />
          <div> {isSubmited && `${granularity} wise quantity`}</div>
          <YAxis dataKey="quantity" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
        </LineChart>
      ) : null}
      {showHide2 ? (
        <LineChart width={600} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="amount"
            stroke="green"
            strokeWidth={5}
          />

          <XAxis dataKey={isSubmited ? granularity : "quantity"} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
        </LineChart>
      ) : null}
    </div>
  );
};

export default TimeSeriesChart;
