const express = require('express')
const mongoose = require('mongoose')
const config = require('../config/DB')
const Product = require('../models/product.model')

const productRoutes = express.Router();

productRoutes.route('/').get((req, res) => {
    mongoose.connect(config.DB)
    Product.find().exec((err, products) => {
        if (err) {
            res.status(400)
            mongoose.connection.close()
        } else {
            res.status(200).json(products)
            mongoose.connection.close()
        }
    })
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

productRoutes.route('/update/:id').post((req, res) => {
    mongoose.connect(config.DB)
    Product.findById(req.params.id, (err, product) => {
        if (!product) {
            mongoose.connection.close()
            return next(new Error('Could not load Document'))
        } else {
            product.productName = req.body.productName
            product.category = req.body.category
            product.price = req.body.price

            product.save().then(data => {
                res.status(200).json('Update Product Success')
                mongoose.connection.close()
            }).catch(err => {
                res.status(400).json('cannot to update the database')
                mongoose.connection.close()
            })
        }
    })
})

productRoutes.route('/:id').get((req, res) => {
    mongoose.connect(config.DB)
    const id = req.params.id
    Product.findById(id, (err, product) => {
        res.status(200).json(product)
        mongoose.connection.close()
    })
})

productRoutes.route('/delete/:id').post((req, res) => {
    mongoose.connect(config.DB)
    Product.findByIdAndDelete({ _id: req.params.id }, err => {
        if (err) {
            res.status(400).json(err)
            mongoose.connection.close()
        } else {
            res.status(200).json('Delete Product Success')
            mongoose.connection.close()
        }
    })
})

productRoutes.route('/test').post((req, res) => {
    res.json(req.body);
})

productRoutes.route('/sum').post((req, res) => {
    result = req.body.x + req.body.y
    res.json(result)
})

module.exports = productRoutes