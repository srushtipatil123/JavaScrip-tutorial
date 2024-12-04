// objects
// object is a reference type
// arrays are good but not suffient.
// for real world data.
// objects stores key value pairs.
// objects don not have index.

// how to create object.

//const person = {name:"srushti",age:22};
const person = {
    name : "srushti",
    age : 22,
    hobbies : ["sleeping", "dancing", "singing"]
}
console.log(person);
console.log("-----------------------------");

// how to access data from the object.

console.log(person.name);
console.log(person.age);
console.log(person.hobbies); 
console.log("-----------------------------");

// how to add key value pair to object

person.gender = "female";
console.log(person);