const express = require('express')
const routeUsers = require('./src/routes/local')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3001

//Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }))

//Conexão com a base
connectDB()

//Define Rotas
app.use('/', require('./src/routes/local'))
app.use('/users', require('./src/routes/users'))
app.use('/films', require('./src/routes/films'))

app.listen(PORT, () => {console.log('Server Started!')})