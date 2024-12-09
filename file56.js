// important array methods

// forEach
// map
// filter
// 


//forEach
const numbers = [5,6,7,8];

// function myFun(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }


// without forEach 
// for(let i=0; i<numbers.length; i++){
//     myFun(numbers[i], i);
// }

// with forEach

//numbers.forEach(myFun);

numbers.forEach(function(number, index){
    console.log(`index is ${index} number is ${number*2}`);
});


//forEach 

const users = [
     {firstName: "srushti", age: 23}, 
     {firstName: "gouri", age: 32},
     {firstName: "ratan", age: 24},      
]
users.forEach(function(user){
    console.log(user.firstName);
})


// using arrow function

console.log("-----------------------------------");

const users1 = [
    {firstName: "srushti", age: 23}, 
    {firstName: "gouri", age: 32},
    {firstName: "ratan", age: 24},      
]
users1.forEach((users) => {
    console.log(users.firstName);
})