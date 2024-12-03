// intro to arraya  ---->  ordered collection of items or elements

let fruits = ["apple", "Banana", "Carrot", "mango"];
let number = [1,2,3,4,5];
let mixed = [1,2,3.6, "string", null, undefined];
console.log(fruits);
console.log(number);
console.log(mixed);
console.log(fruits[2]);

// replacing elemets

 let fruit = ["apple", "Banana", "Carrot", "mango"];
 console.log(fruit);
fruit[1] = "orange";
console.log(fruit);


let fruit1 = ["apple", "Banana", "Carrot", "mango"];
console.log(typeof fruit1);
console.log(Array.isArray(fruit1));