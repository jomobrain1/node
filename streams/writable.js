// Writable streams

let fs =require('fs')


let writestream=fs.createWriteStream(__dirname + "/write.txt")
let readstream=fs.createReadStream(__dirname + "/message.txt",'utf-8')

readstream.on('data',function(chunk){
    console.log('chunk received');
    writestream.write(chunk)
    

})