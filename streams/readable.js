// Readable streams

let fs=require('fs')

let readstream=fs.createReadStream(__dirname + "/message.txt",'utf-8')

readstream.on('data',function(chunk){
    console.log('a chunk has been received here');
    console.log(chunk);
    

})