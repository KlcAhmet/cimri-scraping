function priceSplit(price) {
    const priceSplit = price.split('')
    let returnValue = ""
    try {
        priceSplit.forEach(item => {
            if (item === '.') { }
            else if (item === ',') { }
            else if (item == " ") {
                throw BreakException
            }
            else returnValue += item
        })
    } catch (error) {

    }
    finally { return Number(returnValue) }
}

module.exports = { priceSplit }