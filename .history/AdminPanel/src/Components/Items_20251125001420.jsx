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
            userFlag ? (

            )
          }
          
          <div className="Add-item"></div>
        </div>
      </div>
    </div>
  )
}

export default Items
