let fruitname = [];
console.log(fruitname);
let fruitname1 =["apple", "orange", "banana"];
console.log(fruitname1);
let fruitname2 = new Array ();
console.log(fruitname2);
let fruitname3 = new Array ("apple", "orange", "banana");
console.log(fruitname3);
 let fruit4 = ["apple", "orange", "banana","pineapple"];
 console.log(fruit4);
console.log(`length of array:${fruitname2.length}`);
console.log(`firstname:${fruitname1[0]}`);
console.log(`Secondname:${fruitname1[1]}`);
console.log(`thirdname:${fruitname1[2]}`);
console.log(`fourthname:${fruitname1[3]}`);



// console.log(`type of:${typeof(fruitname1)}`);

// const includesbanana =fruit4.includes(banana);

// console.log(`include banana ${includesbanana}`);


const bananaindex = fruitname3.indexOf("banana");
const pineappleindex = fruitname3.indexOf("pineapple");

console.log(bananaindex);
console.log(pineappleindex);

//push means to add vale at the end

fruit4.push("peech");
console.log(fruit4);

console.log(`length of array fruit4 :${fruit4.length}`);
console.log(`3rd member:${fruit4[4]}`);

//unshift neans to add value in the beginning

fruit4.unshift("guava");
console.log(fruit4);

//to add value at specific position

fruit4.splice(2, 0, "mango");
console.log(fruit4);

//to delete value from beginning

fruit4.shift();
console.log(fruit4);
