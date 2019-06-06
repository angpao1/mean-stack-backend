const express = require('express')
const cors = require('cors')
const path = require('path')
const productRoutes = require('./routes/product.route')



const app = express()
app.use(express.json())
app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST', 'GET', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//app.use(express.static(path.join(__dirname, '../mean-stack-frontend/dist/mean-stack-frontend')))
//app.get('*', (req, res) => {
//    return res.sendFile(path.join(__dirname, '../mean-stack-frontend/dist/mean-stack-frontend/index.html'))
//})

app.use('/products', productRoutes)


const port = 4000
// app.listen(port, '0.0.0.0', () => {
//     console.log('Listening on port ' + port)
// })
app.listen(port, () => {
    console.log('Listening on port ' + port)
})
