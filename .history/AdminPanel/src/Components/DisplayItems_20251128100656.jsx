import React from 'react'
import { useState } from 'react'

const DisplayItems = () => {

    let [allItems, setAllItems] = useState("")

    useEffect(() => {
        axios
          .get("http://localhost:1000/dashboard")
          .then((res) => {
            setAllItems(res.data.existingItems);
          })
          .catch((err) => {
            alert(err);
          });
      }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default DisplayItems
