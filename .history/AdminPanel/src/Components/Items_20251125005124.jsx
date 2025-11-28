import React, { useState, useEffect } from "react";

const Items = () => {
  let [userFlag, setUserFlag] = useState(true);
  let [darkTheme, setDarkTheme] = useState(true);

  let handleUserLogin = () => {
    setUserFlag(false);
  };

  let handleAddItem = () => {
    setUserFlag(true);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    document.body.className = darkTheme ? "dark-theme" : "light-theme";
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

          {/* RIGHT CONTROLS (THEME + USER) */}
          <div className="nav-controls">

            {/* THEME TOGGLE */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {darkTheme ? (
                /* SUN ICON */
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                  <path fill="#00f2ff" d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0-4h1v3h-1V4m0 13h1v3h-1v-3M4 11h3v1H4v-1m13 0h3v1h-3v-1M6.34 5.93l.7-.7 2.12 2.12-.7.7zM14.54 14.13l.7-.7 2.12 2.12-.7.7zM6.34 18.07l2.12-2.12.7.7-2.12 2.12zM14.54 9.87l2.12-2.12.7.7-2.12 2.12z"/>
                </svg>
              ) : (
                /* MOON ICON */
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                  <path fill="#00f2ff" d="M12.05 2.55a1 1 0 0 1 .91.58a8 8 0 0 0 8.46 11.09a1 1 0 0 1 .73 1.61a10 10 0 1 1-10.1-13.3z"/>
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
                    width="24"
                    height="24"
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
                    width="24"
                    height="24"
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
    </div>
  );
};

export default Items;
