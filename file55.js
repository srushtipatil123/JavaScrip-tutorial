// function returing functin

function myFunc(){
    // return 1;
    // return "afaghs";
    // return "425636";
    return { name: "srushti", age: 14}
}


// returning function under function

const ans = myFunc();
console.log(ans);

function myFunc1(){
    function hello(){
        console.log("hello world!");
    }
    return hello;
}
const ans1 = myFunc1();
ans1();