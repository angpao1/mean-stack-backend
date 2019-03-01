const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/DB')

mongoose.connect(config.DB).then(() => {
    console.log('Connect Database')
})

const app = express()
app.use(express.json())
app.use(cors())


const port = 4000
app.listen(port, () => {
    console.log('Listening on port ' + port)
})