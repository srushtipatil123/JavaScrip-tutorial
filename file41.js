// obj destructuring

// without destructruing. 
const band= {
    bandName : "srushti patil",
    famoussong : "dill tu jaa tu",
}
const bandName = band.bandName;
const famoussong = band.famoussong;
console.log(bandName, famoussong);
console.log("------------------------------------------");

// using destructuring.

const band1= {
    bandName1 : "srushti patil",
    famoussong1 : "dill tu jaa tu",
}
const  { bandName1, famoussong1} = band1;

console.log(bandName1);
console.log(famoussong1);
console.log("------------------------------------------");


//  storing in another variable.
const band2= {
    bandName2 : "srushti patil",
    famoussong2 : "dill tu jaa tu",
}
const  { bandName2:var1, famoussong2:var2} = band2;

console.log(var1);
console.log(var2);


//  the remaining variables are store automatically in restprops.
console.log("-------------------------------------");
const band3= {
    bandName3 : "srushti patil",
    famoussong3: "dill tu jaa tu",
    year : 4276,
    anotherfamoussong: "om namha shivya",
}
const  {bandName3, famoussong3, ...restprops }= band3;
console.log(bandName3);
console.log(famoussong3);
console.log(restprops);




