const router = require('express').Router();
let UserInfo = require('../models/userInfo.model')

router.route('/').get((req, res) => {
    UserInfo.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
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
            type: 'info add',
            isSuccess: true,
        }))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/getuserinfo/').get((req, res) => {
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
        .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/changeuserinfo/:id').post((req, res) => {
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



/*    UserInfo.findById(req.params.id)
        .then((response) => {
            response.userPassword = userPassword
 
            res.json({
                type: 'changepassword',
                isSuccess: true,
            })
            response.save()
        })
        .catch(err => res.status(400).json('Error: ' + err)) */
/*  response.surname = surname
 response.gender = gender
 response.birth = birth
 response.city = city
 response.address = address */

module.exports = router