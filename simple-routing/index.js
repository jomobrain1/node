var http=require('http')
var fs=require('fs')
//creating a  http server
// a server takes a request and returns a response
var server=http.createServer(function(req,res){

  if(req.url==="/home" || req.url==="/"){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream(__dirname+"/home.html").pipe(res)
  }
  else if(req.url==="/about"){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream(__dirname+"/about.html").pipe(res)
  }
  else if(req.url==="/contact"){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream(__dirname+"/contact.html").pipe(res)
  }
  else{
    res.writeHead(404,{'Content-Type':'text/html'})
    fs.createReadStream(__dirname+"/404.html").pipe(res)
  }
})

server.listen(3000)

console.log('serve is running on port 3000');

// go to browser and run  http://localhost:3000/