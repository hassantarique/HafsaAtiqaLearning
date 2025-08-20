let val1 = (5>3);
console.log(val1);

let val2 = (5<=3);
console.log(val2);

let val3 =(3===3);
console.log(val3); 

let val4 = (true===false);
console.log(val4);
let val5 = ("Hi" !== "hi");
console.log(val5);

let str1 = "Hello";
let str2 = "Hello";
let val6 = (str1 === str2);
console.log(`val6:${str1 === str2}`);

let str3 = ("");
let str4 = ("");
let val7= (str3 === str4);
console.log(`val7;${val7}`);

let manager1={};
let manager2={};
let manager=(manager1===manager2);
console.log(manager);

let Manager1={};
let Manager2={};
let Manager=(Manager1===Manager2);
console.log(`Manager:${Manager}`);

let Manager3= Manager2;
let manager4=(Manager3===Manager2);
console.log(`manager4: ${manager4}`);
let val8 = ("42"== 42);
let val9=("42"=== 42);
console.log(`val8:${val8} val9:${val9}`);
let val10 = (undefined==null);
let val11 = (undefined===null);
console.log(`val10: ${val10} val11: ${val11}`);