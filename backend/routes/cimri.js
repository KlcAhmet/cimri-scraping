const router = require('express').Router();
const axios = require('axios');
const Cimri = require('../utils/cheerio/Cimri')

const addressCimri = "https://www.cimri.com/"

router.route('/').get((req, res) => {
    axios.get(`${addressCimri}firsatlar`)
        .then(async function (response) {
            // console.dir(Cimri.firsatlarCimri(response.data))
            const data = await Cimri.firsatlarCimri(response.data)
            res.json({
                response: data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
})


module.exports = router