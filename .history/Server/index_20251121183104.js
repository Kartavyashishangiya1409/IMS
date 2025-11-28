const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log("MongoDB is Connected"))
.then(() => console.log("MongoDB is not Connected"))

const app = express()
app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log("Server is running...")
})