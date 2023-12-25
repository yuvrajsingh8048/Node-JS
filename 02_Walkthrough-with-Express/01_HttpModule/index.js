const http = require('http')
const { json } = require('stream/consumers')

const port = 3010

const server = http.createServer(function(req, res) {
    // No internal error !!!!!!!!!!!!
    // res.statusCode = 200
    // res.setHeader('Content-type', 'text/plain')
    // res.end('Node js server created by Code with Yuvi')

    // Internal Server err !!!!!!!!!!!!!!!!!!
    res.statusCode = 500
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({error: "Inernal Server Error"}))
})
server.listen(port, function() {
    console.log(`Server is running at PORT: ${port}`)
})