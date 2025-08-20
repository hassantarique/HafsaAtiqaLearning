let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(date1);
console.log(`calendar date:${date1.toDateString()}`);
console.log(`USA:${date1.toLocaleDateString("en-US")}`);
console.log(`britian:${date1.toLocaleDateString("en-GB")}`);