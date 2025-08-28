const student =new Object();
student.firstName ="ayesha";
student.lastName ="Ali";
student.district = "Rawalpindi";

console.log(student);

let map1 =new Map();
map1.set("firstName","ayesha");
map1.set("lastName","Ali");
map1.set("district","Rawalpindi");

console.log(map1);

console.log(`map size:${map1.size}`);

console.log(`to get last name:${map1.get("lastName")}`);

map1.delete("firstName");
console.log(map1);

console.log(map1.size);


console.log(`to get firstName:${map1.get("firstName")}`);