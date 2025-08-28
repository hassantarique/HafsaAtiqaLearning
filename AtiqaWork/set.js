let set1 = new Set ([1,2,3]);

console.log(set1);

set1.add(2);

console.log(set1);

set1.add(4);
console.log(set1);

console.log(set1.size);

let team1 = new Set();
let emp1 ={
    firstName :"Ayesha",
    lastName : "Ali",

}
let emp2 ={
    firstName : "Alia",
    lastName :"Bano"
}

team1.add(emp1);
team1.add(emp2);
console.log(team1);

console.log(`find emp1 ${team1.has(emp1)}`);
//console.log(`find emp1 ${team1.has(emp3)}`);
