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
    GST_No : String,
    Total_Price : Number,
    Is_Job_Work : String,
    Job_Work_Name : String,
    Job_Work_GST : String,
    Job_Work_Address : String,
})