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

router.route('/changeproduct/:id').post((req, res) => {
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
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {

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
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router