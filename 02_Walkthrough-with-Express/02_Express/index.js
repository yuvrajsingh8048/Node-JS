const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('This is About Page')
})

app.get('/contact', (req, res) => {
    res.send('This is Contact Page')
})

app.listen(port, function() {
    console.log(`Server is running at Port : ${port}`)
})
