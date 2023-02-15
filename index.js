console.log('This is my first statement in node ')

// Returns the file path of the file being executed
console.log(__filename)

// Returns the directory name of the file being executed
console.log(__dirname)

// using set timeout
setTimeout(() => {
  console.log("i will run after 10 seconds");  
}, 10000);

// using setInterval and clear interval
var time=1
var timer=setInterval(() => {
    time++
    if(time>5){
        clearInterval(timer)
    }
    console.log('repeats after every second')   
}, 1000);

// Function to add two  numbers.
function addTwo(num1,num2){
    return num1+num2
}

console.log(addTwo(5,15));