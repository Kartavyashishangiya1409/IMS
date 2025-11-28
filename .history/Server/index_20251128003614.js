const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const InventoryComponent = require("./Models/InventoryComponent")

mongoose.connect("mongodb://localhost:27017/IMS-Project")
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log("MongoDB is not Connected", err))

const app = express()
app.use(express.json())
app.use(cors())

let AdminEmail = "admin@app.com"
let AdminPassword = "Admin@1111"

app.post("/LogIn", async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) return res.json({message: "Enter Both fields"})

    if (email === AdminEmail) {
        if (password === AdminPassword) {
            res.json({message: "Admin Logged In"})
        } else {
            res.json({message: "Invalid Password"})
        }
    } else {
        res.json({message: "Invalid Email"})
    }

})

app.post("/AddItem", async (req, res) => {
    const {
      Item_Name,
      Challan_Number,
      Category,
      Sub_Category,
      HSN_Code,
      Attribute,
      Gross_QTY,
      Tare_Weight,
      Price_Per_QTY,
      GST_Number,
      Is_Job_Work,
      Job_Work_Name,
      Job_Work_GST,
      Job_Work_Address
    } = req.body;

    if (
      !Item_Name ||
      !Challan_Number ||
      !Category ||
      !HSN_Code ||
      !Attribute ||
      !Gross_QTY ||
      !Tare_Weight ||
      !GST_Number
    ) {
      return res.json({ message: "Enter All Fields" });
    }

    if (Is_Job_Work) {
      if (!Job_Work_Name || !Job_Work_GST || !Job_Work_Address) {
        return res.json({ message: "Enter All Job Work Fields" });
      }
    }

    const gross = Number(Gross_QTY);
    const tarePercent = Number(Tare_Weight);

    if (tarePercent > 50) {
      return res.json({ message: "Tare weight cannot exceed 50%" });
    }

    const tareValue = (gross * tarePercent) / 100;
    const netQty = gross - tareValue;

    const totalPrice = Price_Per_QTY ? netQty * Number(Price_Per_QTY) : 0;

    const item = new InventoryComponent({
      Item_Name,
      Challan_No: Challan_Number,
      Category,
      Sub_Category,
      HSN_Code: Number(HSN_Code),
      Attribute,
      Gross_QTY: gross,
      Tare_Weight: tarePercent,
      Net_QTY: netQty,
      Price_Per_QTY: Number(Price_Per_QTY),
      Total_Price: totalPrice,
      GST_No: GST_Number,
      Is_Job_Work,
      Job_Work_Name: Is_Job_Work ? Job_Work_Name : "",
      Job_Work_GST: Is_Job_Work ? Job_Work_GST : "",
      Job_Work_Address: Is_Job_Work ? Job_Work_Address : ""
    });

    await item.save();

    res.json({ message: "Item Added Successfully" });
})

app.

app.listen(1000, () => {
    console.log("Server is running...")
})