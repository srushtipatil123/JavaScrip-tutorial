// spread operator in array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const myArray = [...array1, ...array2, 56, 76, 56];
console.log(myArray);
const myarray1 = [..."abc"];
console.log(myarray1);
const myarray2 = [..."36478569"];
console.log(myarray2);
// const myarray3 = [...674698];  // "it will give error, becoz it should be write in string.""
// console.log(myarray3);
const myarray3 = {...["item1", "item2"]};
console.log(myarray3);



//  spread operator in object.


const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
const obj2 = {
    key1 : "valueunique",
    key3 : "value3",
    key4 : "value4",
};
const myNewobj = {...obj1, ...obj2};
const myNewobj1 = {...obj2, ...obj1, key34 : "value3566"};
console.log(myNewobj);
console.log(myNewobj1);
const myNewobj2 = {..."abc"}; // it will give values with index, like key = index and value = value of obj.
console.log(myNewobj2);