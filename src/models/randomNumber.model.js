const mongoose = require("mongoose")

const randomNumberSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const RandomNumber = mongoose.model("RandomNumber", randomNumberSchema)
module.exports = RandomNumber