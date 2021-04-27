const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userInfo = new Schema({
    userID: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
    },
    gender: {
        type: Number,
        required: true,
    },
    birth: {
        type: Date,
    },
    city: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
        maxlength: 100,
    },
})

const UserInfo = mongoose.model('UserInfo', userInfo)

module.exports = UserInfo