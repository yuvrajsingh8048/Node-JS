const express = require('express')
const app = require('./app.js')

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`This server is running at Port : ${PORT}`)
})
