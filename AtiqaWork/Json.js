let manager ={
    firstName:"Kamran",
    lastName:"Ali",
    age:61,
    birthdate:new Date ("january 1,1982"),
    numOfEmplYear : 7,
    Department: "engineering",
    isActive: true,
    salary:10000

};
let jsonValue = JSON.stringify(manager, null, 2);
console.log(jsonValue);

let newManager = JSON.parse(jsonValue,null,2);
console.log(newManager);

let jsonstring =`{"firstaName":"ali",
"lastName":"Tahir",
"age":"40",
"occupation":"engineering"}`;
console.log(jsonstring);

let jsobject = JSON.parse(jsonstring);
console.log(jsobject);