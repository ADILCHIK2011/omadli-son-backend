const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/database.js")
const userRouter = require("./routers/user.router.js")

const app = express()

app.use(cors());


app.use(express.json())

connectDB()
app.use("/api/v1", userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
});