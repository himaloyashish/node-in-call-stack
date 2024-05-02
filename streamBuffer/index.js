const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write('<html><head><title>form</title></head>');
        res.write('<body><form method="post" action="/process" > <input name="message /></form> </body> ');
        res.end();
    } else if(req.url == "/process" && req.method=="POST"){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk);
        })

        req.on('end', (chunk)=>{
            console.log('Stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })
        res.write("This is process page");
        res.end();
    }else {
        
        res.write("This page is not found");
        res.end();
    }
})


server.listen(3000);
console.log("listening on port 3000");

// const fs = require("fs");

// const ourReadStream  = fs.createReadStream(`${__dirname}/bigData.txt`); //  utf8

// ourReadStream.on("data", (chunk)=>{ // if utf8 has then type data instead.

//     console.log(chunk.toString());

// })