// array destructuring

const myArray = ["value1", "value2", "value3"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1 is", myvar1);
// console.log("value of myvar2 is", myvar2);

// in-shotcut

//let [myvar1, myvar2] = myArray;
let [myvar1, , myvar2] = myArray;  // this method is used to store the value3 in myvar2.
console.log("value of myvar1 is", myvar1);
console.log("value of myvar2 is", myvar2);
console.log("----------------------------------");

// ------------using slice----------------------------------
const myArray1 = ["value3", "value4", "value5", "value6"];
let [myvar3, myvar4] = myArray1;
let myNewArray = myArray1.slice(2,4);
console.log("value of myvar3 is", myvar3);
console.log("value of myvar4 is", myvar4);
console.log(myNewArray);
console.log("----------------------------------");


//-----------using spread oprator--------------------------------------
const mtArray2 = ["value7", "value8", "value9", "value10"];
let [myvar5, myvar6, ...myNewArray1] = mtArray2;
console.log("value of myvar5 is", myvar5);
console.log("value of myvar6 is", myvar6);
console.log(myNewArray1);

