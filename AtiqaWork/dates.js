let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(date1);
console.log(`calendar date:${date1.toDateString()}`);
console.log(`USA:${date1.toLocaleDateString("en-US")}`);
console.log(`britian:${date1.toLocaleDateString("en-GB")}`);

let date2 = new Date ("2023-01-01");
console.log(date2);

let date3 = new Date ("January 1 ,2023");
console.log (date3);

let date4 = new Date ();
console.log(date4);

let date5 = new Date ("2025-08-23T01:30:45.312-05:00");
console.log(date5);

let date6 = new Date (2025, 1, 2, 4, 30,45 );
console.log(date6);

console.log(`Full year:${date5.getFullYear()}`);
console.log(`Month:${date6.getMonth()}`);
console.log(`Date:${date3.getDate()}`);
console.log(`Hours:${date5.getHours()}`);
console.log(`time:${date5.getTime()}`);
