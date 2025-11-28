import React from 'react'
import { useState } from 'react'

const DisplayItems = () => {

    
    
  return (
    <div>
      {
        allItems.map((item, index) => {
            return (
                <div className="item-card" id={allItems._id}>

                </div>
            )
        })
      }
    </div>
  )
}

export default DisplayItems
