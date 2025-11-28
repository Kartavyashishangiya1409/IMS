import React from 'react'
import { useState } from 'react'

const DisplayItems = () => {

    let [allItems, setAllItems] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:1000/displayItems")
          .then((res) => {
            setAllItems(res.data.existingItems);
          })
          .catch((err) => {
            alert(err);
          });
      }, []);
    
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
