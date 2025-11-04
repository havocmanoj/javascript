/*let a= 10, b=23;// global variable
 function operate(x=2, y=6){
    console.log((x+y*y/x)*y); 
    let c = x+y;// local variable
    return c;
}  
operate(a,b); //function call
operate(5);
console.log(c);
*/

let a= 11;
function oddOrEven(a){
    if(a%2==0){
        return "Even";// if success, function terminates here
    }
    console.log("Hello");// if a is odd, this line will be executed
    return "Odd";
}
console.log(oddOrEven(a));

let oddEven = oddOrEven;// assigning function to a variable
console.log(oddEven(8));
let  oddEven2 = (a) => (a%2==0) ? "Even" : "Odd"; // Arrow function or nameless functions
console.log(oddEven2(9));
let multi = (a)=> a*5;
console.log(6);

// Callback function
function operation(a, b, op){
    return op(a,b);

}
let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let mul = (a,b) => a*b;  
let div = (a,b) => a/b;
operation(4,2,add);

// let x6 = (n) => 6*n;
// console.log(x6(7));
// callback function
/*
setTimeout( () => {//setTimout(handler, timeout in ms) two parameters
   // console.log("Hello after 3 seconds");
}, 3000); // executes after 3 seconds
//function veliya kuda veikalam
const myCallback = () => {
    //console.log("Hello after 2 seconds");
}
setTimeout(myCallback, 2000); // executes after 2 seconds myCallback is handler so don't use () after myCallback
//-------------------
function handleGoodbye(name1){
    setTimeout(() => {
        console.log("Goodbye "+name1);
    }, 2000);
}
function greet(name, callback){
    let name1 = name.toUpperCase();
    console.log("Hello "+name1);
    //setTimeout(handleGoodbye, 2000, name1);// after 2 seconds handleGoodbye function will be executed with name1 as argument
     // passing arguments to callback function
     callback(name1)
}

//greet('mano')
greet('suresh', handleGoodbye)*/

