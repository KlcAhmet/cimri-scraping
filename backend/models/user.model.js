const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userMail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 9,
    },
    userPassword: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 4,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User