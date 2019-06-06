const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductSchema = new Schema({
    productName: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },

})

module.exports = mongoose.model('Prodcut', ProductSchema, 'spring')