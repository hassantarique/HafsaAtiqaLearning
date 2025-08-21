let employee = {
    firstName: ("Safia"),
    lastName: ("Aftab"),
    numYearEmployment:3,
    isActiveStatus:true,
    department:"Engineering",
    title :"VP Engineering",
}

switch (employee.department){
    case"Engineering":
    console.log(`meeting in building1`);
    break;

    case"Marketing":
    console.log(`meeting in building2`);
    break;


    default:
        console.log(`meeting in building3`);
    
}