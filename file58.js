// filter method

const numbers = [2,4,3,6,8,7,9,10,11];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);

//

const numbers1 = [2,4,3,6,8,7,9,10,11];

const oddNumbers = numbers.filter((number)=>{
    return number % 2 !== 0;
});
console.log(oddNumbers);