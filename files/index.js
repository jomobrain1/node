let fs=require('fs')


// Reading file content
fs.readFile('message.txt',(err,data)=>{
if(err){
    console.log(err.message);
}else{
    console.log(data.toString());
}

})




// Writing file content
let content="go hard or go home beast"

fs.writeFile('beast.txt',content,function(err){
if(err){
    console.log(err.message);
}else{
    console.log("written successful");
}
})