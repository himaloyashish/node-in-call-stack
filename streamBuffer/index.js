const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write("Hello programmers !");
        res.write("How are you doing?");
        res.end();
    } else if(req.url == "/about"){
        res.write("This is about page");
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