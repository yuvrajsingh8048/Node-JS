const os = require('os')

console.log('Free Mem : '  ,os.freemem());
console.log('Architecture OS : '  ,os.arch());
console.log('Total mem : ' ,os.totalmem());
console.log('Network Interfaces : ' ,os.networkInterfaces());
console.log('Tempory DIR : ' ,os.tmpdir());
console.log('Endianness : '  ,os.endianness());
console.log('Hostname : ' ,os.hostname());
console.log('Type : ' ,os.type());
console.log('Platform : ' ,os.platform());
console.log('Release : ' ,os.release());