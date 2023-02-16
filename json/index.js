let http =require('http')
let fs=require('fs')

// Serving json data

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
    var developer={
        name:"jomobrain1",
        email:"jomobrain1@gmail.com",
        phone:075664,
        salary:"sh.78000" 
    }
    res.end(JSON.stringify(developer))
   })

server.listen(3000)

console.log("Server running on localhost:3000 ");