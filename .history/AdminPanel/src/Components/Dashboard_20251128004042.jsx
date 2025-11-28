import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Dashboard = () => {

    

    useEffect(() => {
        axios.get("http://localhost:1000/dashboard")
            .then((res) => {

            })
            .catch((err) => {
                alert(err)
            })
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
