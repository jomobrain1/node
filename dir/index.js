// creating and deleting directories
 const { log } = require('console')
 let fs=require('fs')
 let dir="users"

 fs.exists(dir,function(exists){
    if(!exists){
        fs.mkdirSync(dir)
    }else{
      log('folder exists')
    }
 })


//  renaming folder
const old_folder="admin"
const new_folder="admin1"

fs.rename(old_folder,new_folder,function(err){
    log(err)
})

// removing directory
let removed="deno"
fs.rmdir(removed,function(err){
    log('directory removed')
})