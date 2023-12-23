const fs = require('fs')

console.log(`Reading File Start`)

// Asynchrounous way to read file
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         console.log(`Error found:  ${err}`)
//         return err
//     }
//     else {
//         console.log(data)
//         console.log(`Reading End`)
//         return data
//     }
// })

// Synchrounous way to read file
let data = fs.readFileSync('input.txt')
console.log(data)
console.log(`Reading End`)

console.log(`Other stuff`)