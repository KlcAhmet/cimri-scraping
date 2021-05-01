const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    try {
        User.find()
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

router.route('/signup').post((req, res) => {
    try {
        const userMail = req.body.userMail
        const userPassword = req.body.userPassword

        const newUser = new User({ userMail, userPassword })

        newUser.save()
            .then(() => res.json({
                type: 'register',
                success: true,
            }))
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'register',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'register',
            statusCode: 500
        })
    }
})

router.route('/signin').get((req, res) => {
    try {
        const userMail = req.body.userMail
        const userPassword = req.body.userPassword

        User.find({
            "userMail": userMail,
            "userPassword": userPassword
        })
            .then((response) => {

                if (response.length) {
                    res.json({
                        type: 'login',
                        success: true,
                        response: response[0]
                    })
                }
                else {
                    res.json({
                        type: 'login',
                        success: false,
                        response: null
                    }
                    )
                }
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'login',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'login',
            statusCode: 500
        })
    }
})

router.route('/changepassword/:id').post((req, res) => {
    try {
        const userPassword = req.body.userPassword

        User.findById(req.params.id)
            .then((response) => {
                response.userPassword = userPassword
                res.json({
                    type: 'changepassword',
                    success: true,
                })
                response.save()
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'changepassword',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'changepassword',
            statusCode: 500
        })
    }
})

router.route('/:id').delete((req, res) => {

    try {
        User.findByIdAndDelete(req.params.id)
            .then((response) => {
                if (response === null) {
                    res.json({
                        type: 'userdelete',
                        success: false,
                        response: "Kullanıcı bulunamadı"
                    })
                }
                else {
                    res.json({
                        type: 'userdelete',
                        success: true,
                        response: response
                    })
                }
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'userdelete',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'userdelete',
            statusCode: 500
        })
    }
})

module.exports = router