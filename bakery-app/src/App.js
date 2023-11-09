import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Components/store/store";
import { useEffect, useState } from "react";
import TimeSeriesDashboard from "./Components/TimeSeriesDashBoard";
import BarGraph from "./Components/BarGraph";
function App() {
  let [orders, setOrders] = useState([]);
  const [cakesOrders, setCakesOrders] = useState([]);
  const [cookiesOrders, setCookiesOrders] = useState([]);
  const [muffinsOrders, setMuffinsOrders] = useState([]);
  const [createdOrders, setCreatedOrders] = useState([]);
  const [shippedOrders, setShippedOrders] = useState([]);
  const [deliveredOrders, setdeliveredOrders] = useState([]);
  const [canceledOrders, setcanceledOrders] = useState([]);
  const [topCities, setTopCities] = useState([]);
  const [newArray, setNewArray] = useState([]);
  useEffect(() => {
    getOrdersData();
  }, []);

  async function getOrdersData() {
    try {
      let resp = await fetch("http://localhost:3000/orders");
      let data = await resp.json();
      console.log(data);
      const orderTypeArray = Object.groupBy(data, ({ orderType }) => orderType);
      const branches = Object.groupBy(
        data,
        ({ branchLocation }) => branchLocation
      );
      console.log(branches);
      let sortedArray = Object.values(branches).sort(
        (a, b) => b.length - a.length
      );
      let top5C = sortedArray.slice(0, 5);
      console.log(top5C);
      const cities = top5C.map((innerArray) => ({
        branchLocation: innerArray[0].branchLocation,
        orderType: innerArray[0].orderType,
        value: innerArray.length,
      }));
      console.log(cities);
      setNewArray(cities.sort((a, b) => b.length - a.length));
      data.map((el, index) => {
        el["cakes"] = orderTypeArray.cake.length;
        el["cookies"] = orderTypeArray.cookies.length;
        el["muffins"] = orderTypeArray.muffins.length;
      });
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Provider store={store}>
      <div className="App">
        <TimeSeriesDashboard data={orders.length > 1 && orders} />
        <div></div> <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <BarGraph data={orders} branches={newArray} />
      </div>
    </Provider>
  );
}

export default App;
