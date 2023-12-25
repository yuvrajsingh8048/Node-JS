const http = require('http')

const port = 3000
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('<h1>HTTP server creted in Node js </h1>')
    }
    else if(req.url == '/about') {
        res.write('<h1> About Page </h1>')
    }
    res.end()
})
server.listen(port)
console.log(`Server is listening at PORT : ${port}`)