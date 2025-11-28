import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  let [allItems, setAllItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/dashboard")
      .then((res) => {
        setAllItems(res.data.existingItems);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  // ✅ Total Stock Value = Sum of (Net_QTY * Price_Per_QTY)
  let Total_Stock_Value = allItems.reduce((total, item) => {
    const netQty = Number(item.Net_QTY) || 0;
    const price = Number(item.Price_Per_QTY) || 0;
    return total + netQty * price;
  }, 0);

  return (
    <div className="dashboard-container">
      <div className="dash-main"></div>
    </div>
  );
};

export default Dashboard;
