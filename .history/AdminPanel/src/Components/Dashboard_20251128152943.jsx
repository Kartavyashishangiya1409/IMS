import React from "react";

const Dashboard = ({ allItems }) => {

  const Total_Stock_Value = allItems.reduce((total, item) => {
    const netQty = Number(item.Net_QTY) || 0;
    const price = Number(item.Price_Per_QTY) || 0;
    return total + netQty * price;
  }, 0);

  const Low_Stock_Items = allItems.filter(item => Number(item.Net_QTY) <= 10).length;

  const Job_Work_Items = allItems.filter(item => item.Is_Job_Work === true).length;

  const Out_Of_Stock = allItems.filter(item => Number(item.Net_QTY) === 0).length;

  return (
    <div className="dashboard-container">
      <div className="dash-main">

        <div className="dash-box">
          <h3>Total Items</h3>
          <p>{allItems.length}</p>
        </div>

        <div className="dash-box">
          <h3>Total Stock Value</h3>
          <p>₹ {Total_Stock_Value.toFixed(2)}</p>
        </div>

        <div className="dash-box">
          <h3>Job Work Items</h3>
          <p>{Job_Work_Items}</p>
        </div>

        <div className="dash-box">
          <h3>Low Stock Items</h3>
          <p>{Low_Stock_Items}</p>
        </div>

        <div className="dash-box">
          <h3>Out of Stock</h3>
          <p>{Out_Of_Stock}</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
