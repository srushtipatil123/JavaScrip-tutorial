// lexical Scope


const myVar = "value1";
function myApp(){

    function myFunction() {
        const myVar = "value45";
        console.log("hello from myFunction", myVar);
    }
    

    
    console.log(myVar);
    myFunction();
}
myApp();