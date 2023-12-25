const http = require('http')

const port = 3200

const server = http.createServer(function(req, res) {
    if(req.url == '/home'){
        res.write('<h1>This is home page</h1>')
    }
    else if(req.url == '/about'){
        res.write('<h1>This is about page</h1>')
    }
    else if(req.url == '/contact'){
        res.write('<h1>This is contact page</h1>')
    }
    else if(req.url == '/product') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        const apiReq = http.request(options, function(apiRes) {
            apiRes.on('data', function(data) {
                res.statusCode = 200
                res.setHeader('Content-type', 'application/json')
                res.end(data)
            })
        })
        apiReq.on('error', function(err) {
            console.log('Error found : ', err)
        })
        apiReq.end()
    }
})

server.listen(port, function() {
    console.log(`Server is running at PORT: ${port}`)
})