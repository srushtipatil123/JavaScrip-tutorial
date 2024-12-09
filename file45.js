// functions expression


const  singHappyBirthday = function(){
    console.log("Happy birthday to you!");
}
singHappyBirthday()

//  reusable function :
const sumTwoNumbers = function(number1, number2) {

    return number1 + number2;
}
const returnedvalue = sumTwoNumbers(4,4);
console.log(returnedvalue);


//isEven
//input = 1 number
//output true or false

const isEven = function(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(5));


//input : string
//output : firstChar

const firstChar = function(anyString){
    return anyString[2];
}
console.log(firstChar("tbc"));


// input : array, target(number)
// output : index of target if target present in array.

function findTarget(array, target){
    for(let i =0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,4,5,7,89];
const ans = findTarget(myArray, 5);
console.log(ans);
