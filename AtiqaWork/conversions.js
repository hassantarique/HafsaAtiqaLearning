const { boolean } = require("yargs");

let strValue = "ali";
let numValue = 7;
let bolValue = false;

//console.log(typeof(strValue));
//console.log(typeof(numValue));
//console.log(typeof(bolValue));

//join
let age = 53;
let firstName = "sara";
let Description = `${firstName} is ${age} years ago.`;
console.log(Description);

let agestring ="41";
let ageNumber = Number(agestring);
console.log(typeof (ageNumber));

let agestring2 = "fourty-one";
let ageNumber2 = Number(agestring2);
console.log(ageNumber2);

let Num1 = 1;
let Num2 = 0;
let Bool1= Boolean(Num2);
let Bool2= Boolean(Num1);
console.log(`Num1: ${Bool1} Num2: ${Bool2}`);
