const fs = require('fs')

// console.log(`Reading File Start`)

// Asynchrounous way to read file
// fs.readFile('node_js.txt', function (err, data) {
//     if (err) {
//         console.log(`Error found:  ${err}`)
//         return err
//     }
//     else {
//         console.log(data.toString())
//         console.log(`Reading End`)
//         return data
//     }
// })

// Synchrounous way to read file
// let data = fs.readFileSync('node_js.txt')
// console.log(data.toString())
// console.log(`Reading End`)

// console.log(`Other stuff`)

// ********************************************************

// Read > Open + read
// const buf = new Buffer(1024)
// fs.open('node_js.txt', 'r+', function(err, fd){
//    if(err) {
//     console.log('Error in opening File', err)
//    }
//    console.log('File open sucessfully')
//    fs.read(fd, buf, 0, buf.length, 0, function(er, byte){
//     if(er){
//         console.log('Error in reading File')
//     }
//     console.log('Byte : ', byte)
//     console.log('Data  : ', buf.slice(0, byte).toString())
//    })
// })

// Write a File

// Asynchronous
// fs.writeFile('node_js.txt', 'PW Skills', function(err, data) {
//     if(err) {
//         console.log('Error in writing a File', err)
//     }
//     console.log('Succesfully writing a File')
// })

// Synchronous
// fs.writeFileSync('node_js.txt', "College Wallah", function(err, data) {
//     if(err) {
//         console.log(`Error in writing a File`)
//     }
//     console.log(`Success in writing a file`)
// })

// Append to a File
// fs.appendFile('node_js.txt', ' -- Yuvraj Singh', 'utf-8', function(err, data) {
//     if(err) {
//         console.log('Error in appending a File')
//     }
//     console.log('Successfully append a File')
// })

// Deleting a file
fs.unlink('input.txt', function(err) {
    if(err) {
        console.log('Error in deleting a file')
    }
    else {
        console.log('Successfully delete a File')
    }
})