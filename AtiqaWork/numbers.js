let num1 = 1.654238;
console.log(`round: ${Math.round(num1)}`);
console.log(`celling: ${Math.ceil(num1)}`);
console.log(`floor: ${Math.floor(num1)}`);

let fixed = num1.toFixed(3);
console.log(`fixed:${fixed}`);
console.log(`type of fixed:${typeof(fixed)}`);

let num2 = 1_000_000;
console.log(`USA:${num2.toLocaleString("en-US")}`);

let salary =1_000_000;
let monthlySalary= salary/12;
console.log(`monthly salary: ${monthlySalary.toFixed(3)}`);
console.log(`salary:${salary}`);

