// functions inside the function

function app(){  // fun-1
    const myFunction = () => {    //fun-2
        console.log("hello from the myFunction");
    }
    const addTwo = (num1, num2) => {   //fun-3
        return num1 + num2 ;
    }
    const mul = (num1, num2) => num1 * num2;  //fun-4

        console.log("inside the app");
        myFunction();
        console.log(addTwo(4,5));
        console.log(mul(4,5));
}
app();