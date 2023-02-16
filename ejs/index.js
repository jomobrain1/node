let express=require('express')
const app= express()

app.set('view engine',"ejs")

// middleware
// This function runs when making any request
// go to http://localhost:3000
// then http://localhost:3000/users/users1
app.use(function(req,res,next){
    console.log("Date",Date.now());
    next()
})

app.get('/',function(req,res){
    var developer={
        "name":"jomobrain1",
        "email":"jomobrain1@gmail.com",
        "phone": 345635,
        "salary":78000
    }
    res.render('home',{'developer':developer})
})
    
app.get('/about',function(req,res){
    res.render('about')
})
app.get('/contact',function(req,res,next){
       console.log('Contactt middleware',Date.now());
        res.render('contact')
})

// app with route parameters
// http://localhost:3000/users/users1
app.get('/users/:username',function(req,res){
 var users={
    "users1":{
        name:"jomobrain1",
        email:"jomobrain1@gmail.com",
        role:"frontend genius"
    },
    "users2":{
        name:"kevin",
        email:"shungula@gmail.com",
        role:"backend"
    }
 }
 res.render('users',{'userDev':users[req.params.username]})
})

// Using Query Strings
//  go to http://localhost:3000/devs?name=jomobrain1&age=23
app.get('/devs',function(req,res){
  var name=req.query.name
  var age=req.query.age
  res.send('Name:'+name+'Age:'+age)
})

// Handling a post Request
// npm i body-parser
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/login',function(req,res){
    res.render('login')
})

app.post('/loginurl',function(req,res){
    var email=req.body.email
    var password=req.body.password
    
    res.send('<h2>Email is:'+email +'</h2> Password is :'+password)

})


app.listen(3000,()=>{
    console.log("Express server at port 3000");
})
