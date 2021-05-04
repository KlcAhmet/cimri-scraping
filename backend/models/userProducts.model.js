const mongoose = require('mongoose')

const Schema = mongoose.Schema

const favoriteOffers = new Schema({
    offerLink: {
        type: String,
        required: true,
        trim: true,
    },
    offerName: {
        type: String,
        required: true,
        trim: true,
    },
    offerPrice: {
        type: String,
        required: true,
        trim: true,
    }
})

const favorite = new Schema({
    productLink: {
        type: String,
        required: true,
        trim: true,
    },
    productImageSrc: {
        type: String,
        required: true,
        trim: true,
    },
    productTitle: {
        type: String,
        required: true,
        trim: true,
    },
    productTopOffers: [favoriteOffers]
})

//---------------------------

const priceAlarm = new Schema({
    productLink: {
        type: String,
        required: true,
        trim: true,
    },
    productImageSrc: {
        type: String,
        required: true,
        trim: true,
    },
    productTitle: {
        type: String,
        required: true,
        trim: true,
    },
    productPrice: {
        type: String,
        required: true,
        trim: true,
    },
})

/* Main Schema */

const userProducts = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    favorite: [favorite],
    priceAlarm: [priceAlarm],
})

const UserProducts = mongoose.model('UserProducts', userProducts)

module.exports = UserProducts