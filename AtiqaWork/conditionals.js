let employee = {
    firstName: ("Safia"),
    lastName: ("Aftab"),
    numYearEmployment:3,
    isActiveStatus:true,
    department:"Engineering",
    title :"VP Engineering",
};
//let BadgeColour;
if (employee.numYearEmployment<5) {employee.BadgeColour ="blue"}
else if (employee.numYearEmployment<10) {employee.BadgeColour ="yellow"}
else if (employee.numYearEmployment<15) {employee.BadgeColour ="pink"}
else if (employee.numYearEmployment<20) {employee.BadgeColour ="purple"}
else(employee.BadgeColour ="silver");

employee.fatherName = "tahir";

console.log(`year of service ${employee.numYearEmployment} badgecolour:${employee.BadgeColour}`);

if(employee.numYearEmployment<5 && employee.department==="Engineering") 
{
    console.log(`meets the criteria`);
} 
else if (employee.numYearEmployment<15 && employee.department==="Engineering") 
{
    console.log(`does notmeets the criteria`);
};


if(employee.numYearEmployment<10 ||employee.title.startswith("VP") ){console.log("meets the criteria")}; 
if(employee.numYearEmployment>10){employee.annualBonus=1000}
else {employee.annualBonus=500};
employee.annualBonus=employee.numYearEmployment>10 ? 1000:500;
console.log(employee.annualBonus);