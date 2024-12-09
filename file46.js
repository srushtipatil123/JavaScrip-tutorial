// arrow fun


const  singHappyBirthday = () => {
    console.log("Happy birthday to you!");
}
singHappyBirthday()

//  reusable function :
const sumTwoNumbers = (number1, number2) => {

    return number1 + number2;
}
const ans1 = sumTwoNumbers(4,1);
console.log(ans1);


//isEven
//input = 1 number
//output true or false

const isEven = (number) => {
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(7));


//input : string
//output : firstChar

const firstChar = (anyString) => {
    return anyString[0];
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
