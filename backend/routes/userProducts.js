const router = require('express').Router();
let UserProducts = require('../models/userProducts.model')

router.route('/').get((req, res) => {
    UserProducts.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router