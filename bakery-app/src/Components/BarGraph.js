import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarGraph({ data, branches }) {
  return (
    <div>
      <div>
        <h3>
          Bar Graphs showing orders divided each type Cake, Muffin, Cookies
        </h3>
      </div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="orderType" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="price"
          fill="blue"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="quantity"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="amount"
          fill="red"
          activeBar={<Rectangle fill="yellow" stroke="green" />}
        />
      </BarChart>

      <div>
        <h3>
          Bar Graphs showing order by state (Created, Shipped, Delivered,
          Canceled)
        </h3>
      </div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="orderState" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="quantity"
          fill="blue"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="price"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="amount"
          fill="red"
          activeBar={<Rectangle fill="yellow" stroke="green" />}
        />
      </BarChart>

      <div>
        <h3>Bar Graphs showing Top 5 cities by orders</h3>
      </div>
      <BarChart height={300} width={700} data={branches}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="branchLocation" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          fill="#007bff"
          activeBar={<Rectangle fill="#dc3545" stroke="#28a745" />}
        />
      </BarChart>
    </div>
  );
}

export default BarGraph;
