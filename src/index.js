const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/database.js")
const userRouter = require("./routers/user.router.js")
const app = express()
app.use(express.json())
app.use(cors({
    origin: "https://omadli-son-frontend.vercel.app"
}))

connectDB()
app.use("/api/v1", userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Oka ${PORT} ulandiyuuuu`);
})