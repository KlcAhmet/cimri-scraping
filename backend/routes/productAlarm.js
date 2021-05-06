const router = require('express').Router();
const axios = require('axios');
const Cimri = require('../utils/cheerio/Cimri')
const cimriPriceSplit = require('../utils/cimriPriceSplit')


router.route('/').post((req, res) => {
    try {
        const productLink = req.body.productLink
        const productPrice = req.body.productPrice
        const oldPrice = 99999999 //cimriPriceSplit.priceSplit(productPrice)
        axios.get(productLink)
            .then(async function (response) {
                const newPrice = await Cimri.productAlarm(response.data)
                if (oldPrice > newPrice) {
                    res.json({
                        success: true,
                        type: 'productAlarm',
                        response: {
                            productTitle: req.body.productTitle
                        }
                    })
                }
                else {
                    res.json({
                        success: true,
                        type: 'productAlarm',
                        response: false
                    })
                }
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'productAlarm',
                    statusCode: 400,
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'productAlarm',
            statusCode: 500
        })
    }
})

module.exports = router