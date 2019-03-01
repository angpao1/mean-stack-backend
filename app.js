const express = require('express')
const cors = require('cors')
const productRoutes = require('./routes/product.route')



const app = express()
app.use(express.json())
app.use(cors())
app.use('/products', productRoutes)


const port = 4000
app.listen(port, () => {
    console.log('Listening on port ' + port)
})