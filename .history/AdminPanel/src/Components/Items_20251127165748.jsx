import React, { useState, useEffect } from "react";
import axios from "axios";

const Items = () => {
  const categoryData = {
    Fasteners: ["Bolts", "Nuts", "Screws", "Washers", "Anchors", "Other"],

    "Pipes & Fittings": [
      "PVC Pipes",
      "GI Pipes",
      "Copper Pipes",
      "Elbows",
      "Tees",
      "Couplers",
      "Other",
    ],

    Tools: [
      "Hand Tools",
      "Power Tools",
      "Measuring Tools",
      "Cutting Tools",
      "Welding Tools",
      "Other",
    ],

    "Electrical Hardware": [
      "Switches",
      "Sockets",
      "MCB",
      "Wires & Cables",
      "Distribution Boards",
      "Other",
    ],

    "Construction Material": [
      "Cement",
      "Bricks",
      "Steel Rods",
      "Sand",
      "Gravel",
      "Other",
    ],

    "Plumbing Hardware": [
      "Taps",
      "Valves",
      "Water Heaters",
      "Pumps",
      "Drainage Systems",
      "Other",
    ],

    "Industrial Components": [
      "Bearings",
      "Gears",
      "Chains",
      "Springs",
      "Hydraulic Parts",
      "Other",
    ],

    "Safety Equipment": [
      "Helmets",
      "Gloves",
      "Safety Goggles",
      "Harnesses",
      "Masks",
      "Other",
    ],

    Other: [],
  };

  let [userFlag, setUserFlag] = useState(true);

  let [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [showModal, setShowModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  let handleUserLogin = () => {
    setShowModal(true);

    axios
      .post("http://localhost:1000/LogIn", { email, password })
      .then((res) => {
        if (res.data.message === "Enter Both fields") return;
        alert(res.data.message);
        setShowModal(false);
        if (res.data.message === "Admin Logged In") setUserFlag(false);

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert(err);
      });
  };

  let handleAdd = () => {
    // setUserFlag(true);
    setShowAddItemModal(true);
  };

  let handleAddItem

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    const theme = darkTheme ? "dark" : "light";
    document.body.className = `${theme}-theme`;
    localStorage.setItem("theme", theme);
  }, [darkTheme]);

  let [Item_Name, set_Item_Name] = useState("");
  let [Challan_Number, set_Challan_Number] = useState("");
  let [Category, set_Category] = useState("");
  let [Sub_Category, set_Sub_Category] = useState("");
  const [CustomCategory, setCustomCategory] = useState("");
  const [CustomSubCategory, setCustomSubCategory] = useState("");
  let [HSN_Code, set_HSN_Code] = useState("");
  let [Attribute, set_Attribute] = useState("");
  let [Gross_QTY, set_Gross_QTY] = useState("");
  let [Tare_Weight, set_Tare_Weight] = useState("");
  let [Net_QTY, set_Net_QTY] = useState("");
  let [Price_Per_QTY, set_Price_Per_QTY] = useState("");
  let [GST_Number, set_GST_Number] = useState("");
  let [Total_Price, set_Total_Price] = useState("");
  let [Is_Job_Work, set_Is_Job_Work] = useState(false);
  let [Job_Work_Name, set_Job_Work_Name] = useState("");
  let [Job_Work_GST, set_Job_Work_GST] = useState("");
  let [Job_Work_Address, set_Job_Work_Address] = useState("");

  return (
    <div>
      <div className="navbar">
        <div className="nav-section">
          {/* SEARCH */}
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M5 10a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5-7a7 7 0 1 0 4.192 12.606l5.1 5.101a1 1 0 0 0 1.415-1.414l-5.1-5.1A7 7 0 0 0 10 3"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT CONTROLS */}
          <div className="nav-controls">
            {/* THEME TOGGLE */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {darkTheme ? (
                // SUN
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                // MOON
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00f2ff"
                    d="M12.05 2.55a1 1 0 0 1 .91.58a8 8 0 0 0 8.46 11.09a1 1 0 0 1 .73 1.61a10 10 0 1 1-10.1-13.3z"
                  />
                </svg>
              )}
            </button>

            {/* USER / ADD BUTTON */}
            <div className={userFlag ? "user-icon" : "Add-item"}>
              <button
                className={userFlag ? "user-login-btn" : "add-item-btn"}
                onClick={userFlag ? handleUserLogin : handleAdd}
              >
                {userFlag ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="user-login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER ROW */}
            <div className="modal-header">
              <h2>Log In</h2>

              {/* CLOSE SVG (NO BUTTON) */}
              <svg
                className="modal-close-icon"
                onClick={() => setShowModal(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#00f2ff"
                    d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            </div>

            {/* FORM */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-submit-btn" onClick={handleUserLogin}>
              Log In
            </button>
          </div>
        </div>
      )}

      {showAddItemModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowAddItemModal(false)}
        >
          <div
            className="user-login-modal addItemForm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Add Item</h2>

              <svg
                className="modal-close-icon"
                onClick={() => setShowAddItemModal(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#00f2ff"
                    d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            </div>
            {/* YOUR EXISTING FORM FIELDS HERE */}
            <input
              type="text"
              placeholder="Name"
              value={Item_Name}
              onChange={(e) => set_Item_Name(e.target.value)}
            />
            <input
              type="text"
              placeholder="Challan number"
              value={Challan_Number}
              onChange={(e) => set_Challan_Number(e.target.value)}
            />
            <input
              type="text"
              placeholder="GST Number"
              value={GST_Number}
              onChange={(e) => set_GST_Number(e.target.value)}
            />

            {/* CATEGORY */}
            <select
              value={Category}
              onChange={(e) => {
                set_Category(e.target.value);
                set_Sub_Category("");
                setCustomCategory("");
              }}
            >
              <option value="">Select Category</option>
              {Object.keys(categoryData).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* If Category = Other */}
            {Category === "Other" && (
              <input
                type="text"
                placeholder="Enter Custom Category"
                value={CustomCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
              />
            )}

            {/* SUB CATEGORY */}
            <select
              value={Sub_Category}
              onChange={(e) => {
                set_Sub_Category(e.target.value);
                setCustomSubCategory("");
              }}
              disabled={!Category || Category === "Other"}
            >
              <option value="">Select Sub Category</option>
              {Category &&
                categoryData[Category]?.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>

            {/* If Sub-Category = Other */}
            {Sub_Category === "Other" && (
              <input
                type="text"
                placeholder="Enter Custom Sub Category"
                value={CustomSubCategory}
                onChange={(e) => setCustomSubCategory(e.target.value)}
              />
            )}

            <input
              type="text"
              placeholder="HSN Code"
              value={HSN_Code}
              onChange={(e) => set_HSN_Code(e.target.value)}
            />
            <input
              type="text"
              placeholder="Attribute"
              value={Attribute}
              onChange={(e) => set_Attribute(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gross QTY"
              value={Gross_QTY}
              onChange={(e) => set_Gross_QTY(e.target.value)}
            />
            <input
              type="text"
              placeholder="Tare Weight"
              value={Tare_Weight}
              onChange={(e) => set_Tare_Weight(e.target.value)}
            />
            <input
              type="text"
              placeholder="Net QTY"
              value={Net_QTY}
              onChange={(e) => set_Net_QTY(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price Per QTY"
              value={Price_Per_QTY}
              onChange={(e) => set_Price_Per_QTY(e.target.value)}
            />

            <div className="jobwork-toggle">
              <label className="jobwork-label">
                <span>Is it Job Work?</span>

                <input
                  type="checkbox"
                  checked={Is_Job_Work}
                  onChange={() => set_Is_Job_Work(!Is_Job_Work)}
                />
                <span className="jobwork-switch"></span>
              </label>
            </div>

            {Is_Job_Work && (
              <div className="jobworkForm">
                <input
                  type="text"
                  placeholder="Job Work Name"
                  value={Job_Work_Name}
                  onChange={(e) => set_Job_Work_Name(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Job Work GST"
                  value={Job_Work_GST}
                  onChange={(e) => set_Job_Work_GST(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Job Work Address"
                  value={Job_Work_Address}
                  onChange={(e) => set_Job_Work_Address(e.target.value)}
                />
              </div>
            )}

            <button onClick={handleAddItem}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
