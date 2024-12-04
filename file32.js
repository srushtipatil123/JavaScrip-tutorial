// while loop in array

const fruits = ["apple", "banana", "greaps"];
let i =0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase());
    i++;
}

// the array stores in another variable

const fruits2 = ["apple", "banana"];
const fruits3 = [];
let k = 0;
while(k<fruits2.length){
    fruits3.push(fruits2[k].toUpperCase());
    k++;
}
console.log(fruits3);



