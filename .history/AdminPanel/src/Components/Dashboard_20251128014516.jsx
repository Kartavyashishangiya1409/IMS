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

  // ✅ LOW STOCK (Net Qty <= 10)
  const Low_Stock_Items = Array.isArray(allItems)
    ? allItems.filter((item) => Number(item.Net_QTY) <= 10).length
    : 0;

  // ✅ JOB WORK ITEMS
  const Job_Work_Items = Array.isArray(allItems)
    ? allItems.filter((item) => item.Is_Job_Work === true).length
    : 0;

  return (
    <div className="dashboard-container">
      <div className="dash-main">
        <div className="dash-box">
          <h3>Total Items</h3>
          <p>{allItems.length}</p>
        </div>

        <div className="dash-box">
          <h3>Total Stock Value</h3>
          <p>₹ {Total_Stock_Value.toLocaleString()}</p>
        </div>

        <div className="dash-box">
          <h3>Low Stock Items</h3>
          <p>{Low_Stock_Items}</p>
        </div>

        <div className="dash-box">
          <h3>Job Work Items</h3>
          <p>{Job_Work_Items}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
