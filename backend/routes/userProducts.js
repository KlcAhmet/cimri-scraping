const router = require('express').Router();
let UserProducts = require('../models/userProducts.model')

router.route('/').get((req, res) => {
    try {
        UserProducts.find()
            .then(response => res.json(response))
            .catch(function (error) {
                res.json({
                    success: false,
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'find',
            statusCode: 500
        })
    }
})


router.route('/add').post((req, res) => {
    try {
        const userID = Number(req.body.userID)
        const favorite = req.body.favorite
        const priceAlarm = req.body.priceAlarm


        const newUserProduct = new UserProducts({ userID, favorite, priceAlarm })

        newUserProduct.save()
            .then(() => res.json({
                type: 'productadd',
                isSuccess: true,
            }))
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'productadd',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'productadd',
            statusCode: 500
        })
    }
})

router.route('/getproducts/').get((req, res) => {
    try {
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
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'productinfo',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'productinfo',
            statusCode: 500
        })
    }
})

router.route('/changeproduct/:id').post((req, res) => {
    try {
        const favorite = req.body.favorite
        const priceAlarm = req.body.priceAlarm

        UserProducts.findById(req.params.id)
            .then((response) => {
                response.favorite = favorite
                response.priceAlarm = priceAlarm

                res.json({
                    type: 'changeproducts',
                    isSuccess: true,
                })
                response.save()
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'changeproducts',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'productdelete',
            statusCode: 500
        })
    }
})

router.route('/:id').delete((req, res) => {
    try {
        UserProducts.findByIdAndDelete(req.params.id)
            .then((response) => {
                if (response === null) {
                    res.json({
                        type: 'productdelete',
                        isSuccess: false,
                        response: response,
                    })
                }
                else {
                    res.json({
                        type: 'productdelete',
                        isSuccess: true,
                        response: response
                    })
                }
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'productdelete',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'productdelete',
            statusCode: 500
        })
    }
})

module.exports = router