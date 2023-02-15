var sum=require('./sum.js')
var data=require('./object.js')
console.log(sum(34,55));

console.log(data,data.name);

// using module patterns in file js

var final=require('./final')

console.log("after multiplication i got"+final.multiply(5,8));

console.log(`after divisiopn i got ${final.divide(78,2)}`)