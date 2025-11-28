const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/")
.then(() => con)

const app = express()
app.use(express.json())
app.use(cors())

app.listen(8080, () => {
    console.log("Server is running...")
})