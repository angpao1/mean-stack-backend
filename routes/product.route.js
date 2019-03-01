const express = require('express')
const mongoose = require('mongoose')
const config = require('../config/DB')
const Product = require('../models/product.model')

const productRoutes = express.Router();

productRoutes.route('/').get((req, res) => {
    res.json('Hello GET')
})

productRoutes.route('/add').post((req, res) => {
    mongoose.connect(config.DB)
    const product = new Product(req.body)
    product.save().then(data => {
        res.status(201).json('Product create success!')
        mongoose.connection.close()
    }).catch(err => {
        res.status(400).json('Can not save to database!')
        mongoose.connection.close()
    })
})

module.exports = productRoutes