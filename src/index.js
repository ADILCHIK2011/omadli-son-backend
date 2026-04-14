const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/database.js")
const userRouter = require("./routers/user.router.js")
const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

connectDB()
app.use("/api/v1", userRouter)

app.listen(process.env.PORT || 3006, () => {
    console.log("Oka ulandiyuuuu");
})