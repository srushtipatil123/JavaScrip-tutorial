// callback function

function myFunc(){
    console.log("inside my function 2");
}

function myFunc1(callback){
    console.log("this is from callback function");
    callback();
}

myFunc1(myFunc);

console.log("-------------------------------------------");


//

function myFunc3(name) {
    console.log("this message is from myfunc3");
    console.log(`my name is ${name}`);
}

function myFunc4(callback){
    console.log("this message is from myFunc4");
    callback("srushti");
}

myFunc4(myFunc3);