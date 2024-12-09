// objects inside the array



const users  = [
    {userID: 1, firstName: "srushti", gender: "female"},
    {userID: 2, firstName: "srushti", gender: "female"},
    {userID: 3, firstName: "srushti", gender: "female"},
]
console.log(users);

// using for of loop
const users1  = [
    {userID: 1, firstName: "srushti", gender: "female"},
    {userID: 2, firstName: "srushti", gender: "female"},
    {userID: 3, firstName: "srushti", gender: "female"},
]
for(let user of users1){
    //console.log(user);
    //console.log(user.userID);
    console.log(user.firstName);

}
