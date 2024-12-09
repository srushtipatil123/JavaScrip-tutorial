// block scope vs functin scope

// let and const are block scope
// var is function scope

{
    let firstName = "srushti";
    console.log(firstName); // if we write the console.log in outside the block then it will give the error.
}
{
    let firstName = "patil";
    console.log(firstName);
}

// var 

{
    var firstName = "gouri"
}
console.log(firstName);  //  In var fun if we write the console.log outside the block then it will the output.

console.log("------------------------");  
function myapp(){
    if(true){
        var firstName = "shru";
        console.log(firstName);
    }
    console.log(firstName);
}
myapp();
console.log("---------------------------");
function myApp() {
    if(true){
        const firstName = "shreya";
        console.log(firstName);
    }
    console.log(firstName); // if we write console outside the const or let block then it will give the error.
}
myApp();