//Pipe streams

let fs =require('fs')
let zlib=require('zlib')

fs.createReadStream(__dirname + "/message.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("pipe.gz"))

console.log('File created and compressed');
