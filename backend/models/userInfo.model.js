const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userInfo = new Schema({
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
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
    },
    surname={
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
    },
    gender={
        type: String,
        required: true,
    },
    birth={
        type: String,
        required: true,
    },
    city={
        type: String,
        trim: true,
        required: true,
    },
    address={
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
})