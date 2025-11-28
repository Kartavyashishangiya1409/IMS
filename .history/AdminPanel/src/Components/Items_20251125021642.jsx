import React, { useState, useEffect } from "react";
import axios from "axios"

const Items = () => {
  let [userFlag, setUserFlag] = useState(true);

  // Theme persistence
  let [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // ✅ NEW: control modal visibility
  let [showModal, setShowModal] = useState(false);

  let handleUserLogin = () => {
    setShowModal(true); // open modal
    
    // setUserFlag(false);
  };

  let handleAddItem = () => {
    setUserFlag(true);
  };

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  // Apply theme + persist
  useEffect(() => {
    const theme = darkTheme ? "dark" : "light";
    document.body.className = `${theme}-theme`;
    localStorage.setItem("theme", theme);
  }, [darkTheme]);

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
                onClick={userFlag ? handleUserLogin : handleAddItem}
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

            <button className="login-submit-btn" onClick={handleUserLogin}>Log In</button>
          </div>
        </div>
      )}



    </div>
  );
};

export default Items;
