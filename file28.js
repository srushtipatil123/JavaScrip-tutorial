// primitive and reference data types

// primitive data type --> the values are stores in the stack one after other so the address is differnt. that's why  after increasing the values also it will not effects to other alues.

let num1 = 6;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);  //output is 6  6.
num1++;
console.log("after increasing num1 value");
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);  // output is 7  6.


// referance data type --> the values are stores in heap so the address is same. that's why after pushing the items in array1, it also effects in array2.

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);   //output is "item1", "item2".
array1.push("item3");
console.log("after pushing item3 to array1");
console.log("array1", array1);
console.log("array2", array2);   //output is "item1", "item2", "item3".