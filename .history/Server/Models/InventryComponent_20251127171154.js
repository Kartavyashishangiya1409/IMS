const mongoose = require("mongoose")

const InventrySchema = new mongoose.Schema({
    Item_Name : String,
    Challan_No : String,
    Category : String,
    Sub_Category : String,
    HSN_Code : Number,
    Attribute : String,
    Gross_QTY : Number,
    Tare_Weight : Number,
    Net_QTY : Number,
    Price_Per_QTY : Number,
    GST_No : String,
    Total_Price : Number,
    Is_Job_Work : Boolean,
    Job_Work_Name : String,
    Job_Work_GST : String,
    Job_Work_Address : String,
})

const InventoryModel = mongoose.model("Items", InventrySchema)
module.exports = 