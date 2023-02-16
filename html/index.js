let http =require('http')
let fs=require('fs')

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    let readstream=fs.createReadStream(__dirname + "/index.html")
    readstream.pipe(res)
   })

server.listen(3000)

console.log("Server running on localhost:3000 ");