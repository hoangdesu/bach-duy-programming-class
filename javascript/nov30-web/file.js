const fs = require('fs')

const data = fs.readFileSync('./hi.js')

console.log(data.toString());
