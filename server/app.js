const express = require("express");
const app = express();

function randomJSONGen() {
  let orderState = ["Created", "Shipped", "Delivered", "Canceled"];
  let orderType = ["cake", "cookies", "muffins"];
  const hyderabadAreas = [
    "Banjara Hills",
    "Jubilee Hills",
    "Gachibowli",
    "Madhapur",
    "Secunderabad",
    "Kukatpally",
    "Hitech City",
    "Ameerpet",
    "Somajiguda",
    "Begumpet",
    "Kondapur",
    "Manikonda",
    "Miyapur",
    "LB Nagar",
    "Mehdipatnam",
    "Nampally",
    "Dilsukhnagar",
    "Himayatnagar",
    "Malakpet",
    "Chandanagar",
  ];

  let randomBranchLocation = Math.floor(Math.random() * hyderabadAreas.length);
  let randomOrderState = Math.floor(Math.random() * orderState.length);
  let randomOrderType = Math.floor(Math.random() * orderType.length);
  let price =
    (randomOrderType === 0 && 500) ||
    (randomOrderType === 1 && 50) ||
    (randomOrderType === 2 && 100);
  let quantity = Math.floor(Math.random() * 5);
  let orderData;
  orderData = {
    customerID: Math.floor(Math.random() * 100),
    orderType: orderType[randomOrderType],
    price: price,
    quantity: quantity,
    amount: price * quantity,
    orderState: orderState[randomOrderState],
    lastUpdatedDate: "",
    branch: randomBranchLocation,
    branchLocation: hyderabadAreas[randomBranchLocation],
  };
  return orderData;
}

function createOrderData(count) {
  const orders = [];
  let randomOrder;
  let day;
  let lastMonthDate = Date.now() - 86400000 * count;
  for (day = lastMonthDate; day < Date.now(); day += 86400000) {
    randomOrder = randomJSONGen();
    randomOrder.lastUpdatedDate = day;
    orders.push(randomOrder);
  }

  return orders;
}
// console.log(createOrderData(5));
app.get("/orders", (req, res) => {
  res.json(createOrderData(50));
});

app.listen(5000, () => {
  console.log("server on running");
});
