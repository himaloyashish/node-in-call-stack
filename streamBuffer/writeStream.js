const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');

    myReadStream.pipe(res);
})

server.listen(3000)
console.log('The server is run on 3000');