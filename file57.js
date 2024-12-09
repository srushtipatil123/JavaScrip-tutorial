// map method


// map output is always comes in array only.
const numbers = [1,2,3,4,5];
const square = function(number) {
    return number * number;
}
const squareNumber = numbers.map(square);
console.log(squareNumber);


//
const numbers1 = [5,6,7,8];
const squareNumber1 = numbers1.map((number, index)=>{
    return `index: ${index}, ${number * number}`;
})
console.log(squareNumber1);



//
const users = [
    {firstName: "srushti", age: 23}, 
    {firstName: "gouri", age: 32},
    {firstName: "ratan", age: 24},      
]

const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);

