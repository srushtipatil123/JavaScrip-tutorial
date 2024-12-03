// array push pop

//push ---> added lastly.
//pop ----> remove from last

let veg = ["tomato", "potato", "brinjal", "carrot"];
console.log(veg);
// push
veg.push("paneer");
console.log(veg);

//pop
// veg.pop();
// console.log(veg);

// the removed array is stored in the another variable.
let popedveg = veg.pop();
console.log(veg);
console.log("popped veg is", popedveg);

// unshift ---> add the element to the first index
let fruit = ["apple", "banana", "grapes"];
fruit.unshift("mango", "brinajal");
console.log(fruit);

// shift --> remove the element from first index.
let fruit1 = ["apple", "banana", "grapes"];
fruit1.shift();
console.log(fruit1);