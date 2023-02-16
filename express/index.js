let express=require('express')
let app=express()

app.get('/',function(req,res){
res.send('Hello World')
})

app.get('/about',function(req,res){
    res.send('This is the About')
    })

app.listen(3000,()=>{
    console.log("Express server at port 3000");
})