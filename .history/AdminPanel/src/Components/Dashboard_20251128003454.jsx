import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Dashboard = () => {

    useEffect(() => {
        axios.get("http://localhost:1000/dashboard")
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
