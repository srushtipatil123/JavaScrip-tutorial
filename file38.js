// iterate object

const person = {
    name : "srushti",
    age : 22,
    "person hobbies" : ["sleeping", "dancing", "singing"]
}

for(let key in person){
   // console.log(key);
   // console.log(person[key]);
    //console.log(`${key} : ${person[key]}`);
    console.log(key,":",person[key]);
}



// using object 

//console.log(Object.keys(person));
//console.log(typeof Object.keys(person));
const val = Array.isArray((Object.keys(person)));
console.log(val);

for(let key of Object.keys(person)){
    //console.log(person[key]);
    console.log(key,":",person[key]);
}