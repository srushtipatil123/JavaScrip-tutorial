// default parameters

function addTwo(a,b) {
    return a+b;
}
const ans = addTwo(4,4);
console.log(ans);
console.log("-----------------------------");

// type2
function addTwo1(a,b=0){
    return a+b;
}
const ans1 = addTwo1(4,6);
console.log(ans1);
console.log("-------------------------------");

// type3

function addTwo2(a,b){
    if(typeof b==="undefined"){
        b=0;
    }
    return a+b;
}
const ans2 = addTwo2(2,5);
console.log(ans2);