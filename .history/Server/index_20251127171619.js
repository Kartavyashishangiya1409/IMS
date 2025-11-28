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
    const {Item_Name, Challan_Number, Category, Sub_Category, CustomCategory, CustomSubCategory, HSN_Code, Attribute, Gross_QTY, Tare_Weight, Net_QTY, Price_Per_QTY, GST_Number, Is_Job_Work, Job_Work_Name, Job_Work_GST, Job_Work_Address} = req.body

    const item = new InventoryComponent({})
})

app.listen(1000, () => {
    console.log("Server is running...")
})