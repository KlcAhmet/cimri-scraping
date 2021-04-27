const router = require('express').Router();
let UserInfo = require('../models/userInfo.model')

router.route('/').get((req, res) => {
    UserInfo.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const userID = req.body.userID
    const name = req.body.name

    const newUserInfo = new UserInfo({ userID, name })

    newUserInfo.save()
        .then(() => res.json({
            type: 'info add',
            isSuccess: true,

        }))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router