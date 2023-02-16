var http=require('http')
//creating a  http server
// a server takes a request and returns a response
var server=http.createServer(function(req,res){
 res.writeHead(200,{'Content-Type':'text/plain'})
 res.end('this is http server')
})

server.listen(3000)

console.log('serve is running on port 3000');

// go to browser and run  http://localhost:3000/