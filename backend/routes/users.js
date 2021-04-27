const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/signup').post((req, res) => {
    const userMail = req.body.userMail
    const userPassword = req.body.userPassword

    const newUser = new User({ userMail, userPassword })

    newUser.save()
        .then(() => res.json('Kayıt Edildi!'))
        .catch(err => res.status(400).json('Error: ' + err))
})



module.exports = router