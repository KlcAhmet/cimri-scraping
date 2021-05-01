class priceAlarm {
    constructor(productLink, productImageSrc, productTitle, productPrice) {
        this.productLink = String(productLink)
        this.productImageSrc = String(productImageSrc)
        this.productTitle = String(productTitle)
        this.productPrice = String(productPrice)
    }
}

class UserProducts {
    constructor(userID, [priceAlarm]) {
        this.userID = String(userID)
        this.priceAlarm = new priceAlarm(priceAlarm)
    }
}

export default UserProducts