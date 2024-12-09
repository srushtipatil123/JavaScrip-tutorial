const users  = [
    {userID: 1, firstName: "srushti", gender: "female"},
    {userID: 2, firstName: "bhagya", gender: "female"},
    {userID: 3, firstName: "sid", gender: "male"},
]
const [user1, user2, user3] = users;
console.log(users);
console.log(user1);
console.log("-----------------------------------------");
const [{firstName}, , {gender}]= users;
const [{firstName: user1firstName}, , {gender: user3gender}]= users;
console.log(user1firstName);
console.log(user3gender);