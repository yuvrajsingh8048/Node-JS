const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is must required'],
        trim: true,
        maxLength: [20, 'Name must be less than 20']
    },
    email: {
        type: String,
        require: [true, 'Email is must required'],
        unique: true

    }
})

module.exports = mongoose.model("User", userSchema)