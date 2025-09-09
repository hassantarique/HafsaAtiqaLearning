


function greetings(name) {
    console.log('hello ' + name);
}

greetings('john');
greetings('ayesha');

//console.log(greetings('john'));
//console.log(greetings('ayesha'));

function sum (num1, num2){
    return num1 + num2 ;
}

let result  = sum (2,3);
console.log(result);

result  = sum (4,7);
console.log(result);

//function printAll (){
    //for (let i=0; i <arguments.length; i++)
    ///console.log(i);
//}
//printAll(1,2,3,4,5,6);
//printAll (10,20);

function greeting(){
    let message = 'hello';
    console.log(message);
}
greeting();
//function greeting(){
    //let message = 'hello';
  //  }
//console.log(message);
//greeting();


function greet(){
let message ='hello girl';
let sayHi = function Hi(){
    console.log(message);
}
sayHi();
}
greet();


function greet1(){
let message ='hello girl';
let sayHi = function Hi(){
    let message = 'hello'
    console.log(message);
}
sayHi();
}
greet();


function greet2(){
let message ='hello girl';
let sayHi = function Hi(){
    let message = 'hello'
}
sayHi();
console.log(message);
}
greet2();