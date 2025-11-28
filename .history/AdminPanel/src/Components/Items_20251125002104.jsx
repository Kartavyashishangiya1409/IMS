import React, { useState } from 'react'

const Items = () => {

  let [userFlag, setUserFlag] = useState(true)


  
  return (
    <div>
      <div className="nav-section">
        <div className="search-box">
            <input type="text" placeholder='Search' />
            <div className="search-icon"></div>
        </div>
        <div className={userFlag ? "user-icon" : "Add-item"}>
          {
            <button className={userFlag ? "user"} onClick={userFlag ? handleUserLogin : handleAddItem}>
              {
                userFlag ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                ) : (
                  "+"
                )
              }
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Items
