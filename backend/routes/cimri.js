const router = require('express').Router();
const axios = require('axios');
const Cimri = require('../utils/cheerio/Cimri')
const cimriSearch = require('../utils/cimriSearch')

const addressCimri = "https://www.cimri.com/"

router.route('/').get((req, res) => {
    try {
        axios.get(`${addressCimri}`)
            .then(async function (response) {
                // console.dir(Cimri.firsatlarCimri(response.data))
                const data = await Cimri.headerCimri(response.data)
                res.json({
                    statusCode: res.statusCode,
                    success: true,
                    type: 'header',
                    data: data
                })
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'header',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'header',
            statusCode: 500
        })
    }
})

router.route('/firsatlar').get((req, res) => {
    try {
        axios.get(`${addressCimri}firsatlar`)
            .then(async function (response) {
                const data = await Cimri.firsatlarCimri(response.data)
                res.json({
                    statusCode: res.statusCode,
                    success: true,
                    type: 'firsatlar',
                    data: data
                })
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'firsatlar',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'firsatlar',
            statusCode: 500
        })
    }
})

router.route('/search').get((req, res) => {
    try {
        const link = req.body.searchLink
        const searchlink = cimriSearch.searchCimri(link)
        axios.get(`${addressCimri}${searchlink}`)
            .then(async function (response) {
                const data = Cimri.searchCimri(response.data, response.config.url)
                res.json({
                    statusCode: res.statusCode,
                    success: true,
                    type: 'search',
                    data: data
                })
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'search',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'search',
            statusCode: 500
        })
    }

})

router.route('/searchsub').get((req, res) => {
    try {
        axios.get(`https://www.cimri.com${req.body.searchLink}`)
            .then(async function (response) {
                const data = Cimri.searchCimri(response.data, response.config.url)
                console.log(response.config.url);
                res.json({
                    statusCode: res.statusCode,
                    success: true,
                    type: 'subcategory',
                    data: data
                })
            })
            .catch(function (error) {
                res.json({
                    success: false,
                    type: 'subcategory',
                    statusCode: 400
                })
            })
    } catch (error) {
        res.json({
            success: false,
            type: 'subcategory',
            statusCode: 500
        })
    }
})

module.exports = router