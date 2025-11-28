const mongoose = require("mongoose")

const InventrySchema = new mongoose.Schema({
    Challan_No : String,
    Category : String,
    Sub_Category : String,
    Item_Name : String,
    HSN_Code : Number,
    Attribute : String,
    Gross_QTY : Number,
    Tare_Weight : Number,
    Net_QTY : Number,
    Price_Per_QTY : Number,
    GST_N
    Total_Price : Number
})