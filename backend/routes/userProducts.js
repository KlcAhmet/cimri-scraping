const router = require('express').Router();
let UserProducts = require('../models/userProducts.model')

router.route('/').get((req, res) => {
    UserProducts.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/add').post((req, res) => {
    const userID = Number(req.body.userID)
    const favorite = req.body.favorite
    const priceAlarm = req.body.priceAlarm


    const newUserProduct = new UserProducts({ userID, favorite, priceAlarm })

    newUserProduct.save()
        .then(() => res.json({
            type: 'productadd',
            isSuccess: true,
        }))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getproducts/').get((req, res) => {
    const userID = req.body.userID

    UserProducts.find({
        "userID": userID
    })
        .then((response) => {

            if (response.length) {
                res.json({
                    type: 'productinfo',
                    isSuccess: true,
                    response: response[0]
                })
            }
            else {
                res.json(
                    {
                        type: 'productinfo',
                        isSuccess: false,
                        response: null
                    }
                )
            }
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router