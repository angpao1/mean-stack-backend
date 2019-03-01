const express = require('express')

const productRoutes = express.Router();

productRoutes.route('/').get((req, res) => {
    res.json('Hello GET')
})

productRoutes.route('/add').post((req, res) => {
    res.json('Hello POST')
})

module.exports = productRoutes