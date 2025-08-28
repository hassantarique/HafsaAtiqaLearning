let employee = {
    firstName: ("Safia"),
    lastName: ("Aftab"),
    numYearEmployment:3,
    isActiveStatus:true,
    department:"Marketing",
    title :"VP Engineering",
}

// switch (employee.department){
//     case"Engineering":
//     console.log(`meeting in building1`);
//     break;

//     case"Marketing":
//     console.log(`meeting in building2`);
//     break;


//     default:
//         console.log(`meeting in building3`);
    
// }
if (employee.department == "Engineering")
 console.log(`meeting in building1`)

else if(employee.department == "Marketing")
    console.log(`meeting in building 2`)

else(console.log(`meeting in building3`));