// parameter destructuring

// object 
// react


const person = {
    firstName : "srushti",
    gender : "female",
    age : 40
}

// function printdetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

//after destructing
function printdetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printdetails(person);