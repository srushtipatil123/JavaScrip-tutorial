// for loop in array

let fruits = ["apple", "banana", "grapes", "cherry"];
// for(let i=0; i<=fruits.length-1; i++){
//     console.log(fruits[i]);
// }

//------------------------------------------------------
// for(let i=0; i<=fruits.length-1; i++){
//     console.log(fruits[i].toUpperCase());
// }
//-----------------------------------------------------

let fruits1 = [];
for(let i=0; i<fruits.length; i++){
    fruits1.push(fruits[i].toUpperCase());
}
console.log(fruits1);

