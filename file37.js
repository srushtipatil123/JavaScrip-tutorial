// difference between dot and bracket notation
const key = "email";
const person = {
    name : "srushti",
    age : 22,
    hobbies : ["sleeping", "dancing", "singing"]
}
person[key] = "srushti@gmail.com";
//person["email"] = "srushti@gmail.com";
console.log(person);