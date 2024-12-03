// string concatination 

// let string1 = "srushti";
// let string2 = "patil";
// let fullname = string1 + " " + string2;
// console.log(fullname);

let string1 = "13";
let string2 = "34";
// let newstring = string1 + " " + string2; ---> 13 34
let newstring = +string1 + +string2;  
console.log(newstring);
console.log(typeof newstring);