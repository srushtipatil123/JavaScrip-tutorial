// hoisting

hello()

function hello() {
    console.log("hello world!");
}
//  if we write function instade of function expression and arrow function it will give an error.

//console.log(hello1);  //if we write before the intializing the fun then it will give the error.
const hello1 = "hello world!"
console.log(hello1);