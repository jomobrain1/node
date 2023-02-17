
const mysql=require('mysql')
const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"devs",
    multipleStatements:true
})

connection.connect(function(err){
    if(!err){
        console.log('Connected to database SuccessFully');

    }else{
        console.log('Connection Failed');
        console.log(err);
    }
})

app.post('/devs',function(req,res){
   
    
    let name=req.body.name
    let email=req.body.email
    let salary=req.body.salary
    let query=`insert into developers(name,email,salary) values(?,?,?)`;
   
 connection.query(
    query,
    [name,email,salary],
    (err,response)=>{
        console.log('name:',name);
        if(!err){
            // res.status(200).json({message:"Record added"})
            res.send('Record added SuccessFuly')
        }else{
            console.log(err);
        }
       }
    )
})

app.get('/devs',(req,res)=>{
let sql="Select * from developers"
connection.query(sql,function(err,response){
    if(!err){
        res.send(response)
    }
})
})

// get one http://localhost:3001/devs/18
app.get('/devs/:id',(req,res)=>{
    let url_id=req.params.id
    let sql=`SELECT * FROM developers WHERE id='${url_id}'`
    connection.query(sql,function(err,response){
        if(!err){
            res.send(response)
        }else{
            console.log(err);
        }
    })
    })

// Put Request
app.put('/devs/:id',(req,res)=>{
    let url_id=req.params.id
    let sql=`update  developers set salary='${req.body.salary}' WHERE id='${url_id}'`
    connection.query(sql,function(err,response){
        if(!err){
            res.send('Update Success')
        }else{
            console.log(err);
        }
    })
    })

// Delete Request
app.delete('/devs/:id',(req,res)=>{
    let url_id=req.params.id
    let sql=`delete from developers  WHERE id='${url_id}'`
    connection.query(sql,function(err,response){
        if(!err){
            res.send('Delete Success')
        }else{
            console.log(err);
        }
    })
    })
app.listen(3001,function(){
    console.log('Running on port 3001');
})



