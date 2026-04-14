const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB ulandi bachajonim");
    } catch (e) {
        console.log(e);
        process.exit(1)
    }
}

module.exports = connectDB