const { Console } = require("console");

var string = " this is a string"
console.log(string);


let a = "global ";//this is global cariable

{
    let a = "localr"; //this is local variable;
    console.log(a);
}
console.log(a);//this will print gloabal because a is global
const c = 5;


console.log("-----------------------This section for if statements-----------------------")


let age = 19;
if (age>18) {
    console.log("you can do whatever you want;")

    
}
else{
    console.log("you can not do anything without permission")
}

let age1 = 17;
if (age<18) {
    console.log("you can do whatever you want;")

    
}
else{
    console.log("you can not do anything without permission")
}
let cups = 45;
switch (cups) {
    case 4:
        console.log("your cup number is 4")
        
        break;
    case 41:
        console.log("your cup number is 41")
        
        break;
    case 45:
        console.log("your cup number is 45")
        
        break;

    default:
        Console.log("none of he cups 4,41,45")
        break;
}