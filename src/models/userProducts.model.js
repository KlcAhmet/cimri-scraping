const priceAlarm = {
    productLink: String,
    productImageSrc: String,
    productTitle: String,
    productPrice: String,
}

const favoriteOffers = {
    offerLink: String,
    offerName: String,
    offerPrice: String
}

const favorite = {
    productLink: String,
    productImageSrc: String,
    productTitle: String,
    offers: [favoriteOffers]
}

const UserProducts = {
    userID: String,
    favorite: [favorite],
    priceAlarm: [priceAlarm]

}

export default { UserProducts, priceAlarm, favoriteOffers, favorite }