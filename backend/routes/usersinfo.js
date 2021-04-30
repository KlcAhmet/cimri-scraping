const router = require('express').Router();
let UserInfo = require('../models/userInfo.model')

router.route('/').get((req, res) => {
    try {
        UserInfo.find()
            .then(response => res.json(response))
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'find',
                    statusCode: 400
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
        const name = req.body.name
        const surname = req.body.surname
        const gender = Number(req.body.gender)
        const birth = Date(req.body.birth)
        const city = req.body.city
        const address = req.body.address


        const newUserInfo = new UserInfo({ userID, name, surname, gender, birth, city, address })

        newUserInfo.save()
            .then(() => res.json({
                type: 'infoadd',
                isSuccess: true,
            }))
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'infoadd',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'infoadd',
            statusCode: 500
        })
    }
})

router.route('/getuserinfo').get((req, res) => {
    try {
        const userID = req.body.userID

        UserInfo.find({
            "userID": userID
        })
            .then((response) => {

                if (response.length) {
                    res.json({
                        type: 'userinfo',
                        isSuccess: true,
                        response: response[0]
                    })
                }
                else {
                    res.json(
                        {
                            type: 'userinfo',
                            isSuccess: false,
                            response: null
                        }
                    )
                }
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'userinfo',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'userinfo',
            statusCode: 500
        })
    }
})


router.route('/changeuserinfo/:id').post((req, res) => {
    try {
        const name = req.body.name
        const surname = req.body.surname
        const gender = Number(req.body.gender)
        const birth = Date(req.body.birth)
        const city = req.body.city
        const address = req.body.address

        UserInfo.findById(req.params.id)
            .then((response) => {
                response.name = name
                response.surname = surname
                response.gender = gender
                response.birth = birth
                response.city = city
                response.address = address

                res.json({
                    type: 'changeuserinfo',
                    isSuccess: true,
                })
                response.save()
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'changeuserinfo',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'changeuserinfo',
            statusCode: 500
        })
    }
})

router.route('/:id').delete((req, res) => {
    try {
        UserInfo.findByIdAndDelete(req.params.id)
            .then((response) => {
                res.json({
                    type: 'userinfodelete',
                    isSuccess: true,
                })
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'userinfodelete',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'userinfodelete',
            statusCode: 500
        })
    }
})

module.exports = router