const fs = require("fs");

const ourReadStream  = fs.createReadStream(`${__dirname}/bigData.txt`); //  utf8

ourReadStream.on("data", (chunk)=>{ // if utf8 has then type data instead.

    console.log(chunk.toString());

})