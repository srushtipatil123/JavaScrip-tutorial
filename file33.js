// for of loop  array

const fruits = ["apple", "banana", "cherry"];
for(let fruits1 of fruits){
    console.log(fruits1.toUpperCase()); // the output without the index.
}

// the array stored in another variable

const fruits2 = ["apple", "banana"];
const fruits3 = [];
for(let fruits of fruits2){
    fruits3.push(fruits.toUpperCase());
}
console.log(fruits3);