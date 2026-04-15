const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database.js");
const userRouter = require("./routers/user.router.js");

const app = express();

const CORS_LINK = process.env.CORS || "https://omadli-son-frontend.vercel.app";
app.use(cors({
    origin: CORS_LINK.replace(/\/$/, ""),
    credentials: true
}));

app.use(express.json());

connectDB();

app.use("/api/v1", userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Nimadir xato ketdi!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
});