const http = require('http')

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const apiReq = http.request(options, function(apiRes) {
    apiRes.on('data', function(data) {
        console.log(data.toString())
    })
})

apiReq.on('error', function(err) {
    console.log(err)
})
apiReq.end()
