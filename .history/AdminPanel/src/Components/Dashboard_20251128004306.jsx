import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = () => {

    let [allItems, setAllItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1000/dashboard")
            .then((res) => {
                setAllItems(res.data.existingItems)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])
    
  return (
    <div>
        <div className="dash-box">
            <h3>Items</h3>
            <p></p>
        </div>
      
    </div>
  )
}

export default Dashboard
