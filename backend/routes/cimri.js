const router = require('express').Router();
const axios = require('axios');
const Cimri = require('../utils/cheerio/Cimri')
const cimriSearch = require('../utils/cimriSearch')

const addressCimri = "https://www.cimri.com/"

router.route('/').get((req, res) => {
    axios.get(`${addressCimri}`)
        .then(async function (response) {
            // console.dir(Cimri.firsatlarCimri(response.data))
            const data = await Cimri.headerCimri(response.data)
            res.json({
                data: data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})

router.route('/firsatlar').get((req, res) => {
    axios.get(`${addressCimri}firsatlar`)
        .then(async function (response) {
            const data = await Cimri.firsatlarCimri(response.data)
            res.json({
                data: data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})

router.route('/search').get((req, res) => {
    const link = req.body.searchLink
    const searchlink = cimriSearch.searchCimri(link)
    axios.get(`${addressCimri}${searchlink}`)
        .then(async function (response) {
            const data = Cimri.searchCimri(response.data, response.config.url)
            res.json({
                data: data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


module.exports = router