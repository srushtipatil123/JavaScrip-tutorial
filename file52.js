// rest parameters

function myFunction(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    //console.log(`c is ${c}`);
    console.log(`c is`, c) // it will give in array
}
myFunction(2,3,4,5,6,7,8,9);


// adding all numbers

function myFunc(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = myFunc(3,4,5,6,7);
console.log(ans);