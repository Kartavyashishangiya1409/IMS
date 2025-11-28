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

app.post("/AddItem", as)

app.listen(1000, () => {
    console.log("Server is running...")
})