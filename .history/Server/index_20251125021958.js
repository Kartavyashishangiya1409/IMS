const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

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

    if (email === AdminEmail)
})

app.listen(8080, () => {
    console.log("Server is running...")
})