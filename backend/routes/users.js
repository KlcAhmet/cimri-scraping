const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/signup').post((req, res) => {
    const userMail = req.body.userMail
    const userPassword = req.body.userPassword

    const newUser = new User({ userMail, userPassword })

    newUser.save()
        .then(() => res.json({
            type: 'register',
            isSuccess: true,

        }))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/signin').get((req, res) => {
    const userMail = req.body.userMail
    const userPassword = req.body.userPassword

    User.find({
        "userMail": userMail,
        "userPassword": userPassword
    })
        .then((response) => {

            console.log(response)
            if (response.length) {
                res.json({
                    type: 'login',
                    isSuccess: true,
                    response: response[0]
                })
            }
            else {
                res.json(
                    {
                        type: 'login',
                        isSuccess: false,
                        response: null
                    }
                )
            }
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/changepassword/:id').post((req, res) => {
    const userPassword = req.body.userPassword

    User.findById(req.params.id)
        .then((response) => {
            response.userPassword = userPassword

            res.json({
                type: 'changepassword',
                isSuccess: true,
            })
            response.save()
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {

    User.findByIdAndDelete(req.params.id)
        .then((response) => {
            res.json({
                type: 'userdelete',
                isSuccess: true,
            })
            response.save()
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router