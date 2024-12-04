// for in loop  array

const fruits = ["apple", "greaps", "banana"];


for(let index in fruits){
    console.log(index);
    //console.log(fruits[index]);   // the output with index.
}

const fruits1 = ["apple", "banana"];
const fruits2  = [];
for(let index in fruits1){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
