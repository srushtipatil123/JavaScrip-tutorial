// undefined
// null

// var firstName;
// console.log(firstName);
// // ans is "undefined"

// let firstName1;
// console.log(firstName1);
// // ans is "undefined"

// const firstName2 = "shru"; 
// console.log(firstName2);  //output is some error becoz it needs some input 


//null

// let myVariable = "null";
// console.log(myVariable);

// myVariable = "srushti";
// console.log(myVariable, typeof myVariable);

//console.log(typeof null);   // output is "object", it is type of bug or error in JavaScript.

// BigInt

let myNumber = BigInt(12);
let sameMynumber = 14n;  //also BigInt;
//console.log(myNumber);
//console.log(sameMynumber);
//console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMynumber);  //to add the two operators that should be same BigInt numbers, otherwise it comes error.

