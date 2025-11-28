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
        console.log(res.data);
        setAllItems(res.data.existingItems || []);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  let Total_Stock_Value = Array.isArray(allItems)
    ? allItems.reduce((total, item) => {
        const netQty = Number(item.Net_QTY) || 0;
        const price = Number(item.Price_Per_QTY) || 0;
        return total + netQty * price;
      }, 0)
    : 0;

    console.log(allItems.)

  return (
    <div>
      <div className="dash-box">
        <h3>Items</h3>
        <p>{allItems.length}</p>
      </div>
      <div className="dash-box">
        <h3>Total Stock Value</h3>
        <p>₹ {Total_Stock_Value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Dashboard;
