require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDb = require('./config/db')
const app = express()

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// cors
app.use(cors())

// init connection to DB
connectToDb()

const userRoutes = require('./routes/userRoutes.js')
app.use('/', userRoutes)

module.exports = app