
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

function showMenu() {
   console.log("what you want to do,enter number for your desired option");
   console.log("1.add new amployee");
   console.log("2.show list of all employees");
   console.log("3.search the employee by name");
   console.log("4.replace the employee information");
   console.log("5.export in Json");
   console.log("6.exit application");

};

    // employee.department =getInput("Department : " , isStringValid);
    // let yearOfBirth = getInput("Enter year of birth (1950-2008): ",isYearValid );
    // let  monthOfBirth = getInput("Enter Month of birth(1-12: ", isMonthValid);

function getInput(promptText, whichFunctionToCall){
    let value = prompt(promptText)

    if(
            whichFunctionToCall 
            && ! whichFunctionToCall(value)
    ) {
        console.error("invalid input");
        Process.exit(1);
    }

    return value;
}

const isStringValid = function(input) {
    return(input) ? true :false ;
}

const isYearValid = function(input) {
    let numValue = Number(input);

    if(
            ! Number.isInteger(numValue)
            || numValue<1950
            || numValue>2008
    ){
        return false;
    }
    else{
        return true;
    }
    
}
    const isMonthValid = function(input){
    let monthOfBirth= Number(input);
    if(!Number.isInteger(monthOfBirth) || monthOfBirth<1 || monthOfBirth>12){
         return false;
    }
    else{
        return true;
    }
 }
 const isDayValid = function(input){
   let dateOfBirth= Number(input);
    if(!Number.isInteger(dateOfBirth) || dateOfBirth<1 || dateOfBirth>31){
        return false;
    }
    else{
        return true;
    }
    }

    const isBooleanInpputValid = function(input){
        return (input === "yes" || input ==="No")
    }
     



    let totalEmployees =[];

    while(true){

        
  let Menu= prompt( " type 1-6");
   
  if (Menu === "1"){
    let employee = {}
    employee.firstName =getInput("First Name : " , isStringValid);
    employee.lastName =getInput("last Name : " , isStringValid);
    employee.department =getInput("Department : " , isStringValid);
    let yearOfBirth = getInput("Enter year of birth (1950-2008): ",isYearValid );
    let  monthOfBirth = getInput("Enter Month of birth(1-12: ", isMonthValid);
    let dayOfBirth = getInput("Enter days of month: ", isDayValid);
     employee.dateOfBirth =  new Date (yearOfBirth, monthOfBirth-1, dayOfBirth);
     employee.isEmployeeActive=getInput("Enter yes or no: " ,isBooleanInpputValid);

    
    totalEmployees.push(employee);
    console.log("data of employee added successfully");
    console.log("_________");
    showMenu();
}
else if (Menu === "2"){
    console.log(totalEmployees)
    showMenu();
}
else if(Menu === "3"){
    let nameOfEmployee = prompt("search employee by name:");
    for (let index = 0; index < totalEmployees.length; index++) {
     if (totalEmployees[index].firstName == nameOfEmployee) {
     console.log(totalEmployees[index]);
     }
    };
    showMenu();
 }
 else if (Menu === "4") {
      let replace = prompt ("enter the firstName of the object to be replaced:");
      for (let index = 0; index < totalEmployees.length; index++) {
         if (totalEmployees[index].firstName === replace) {
            // Found the student, get new details
            let firstName = prompt("Enter new first name: ");
            let lastName = prompt("Enter new last name: ");
            let department = prompt("Enter new department: ");
            let yearsOfEmployment = prompt("Enter new year of employment");
            let dateOfBirth = prompt ("enter new date of birth");
            let status = prompt ("enter active or inactive}");


            totalEmployees[index] = { firstName, lastName, department,yearsOfEmployment,dateOfBirth,status};
            }
     };
     showMenu();
 }
else if (Menu === "5") {
     totalEmployees = JSON.stringify(totalEmployees);
     console.log(totalEmployees);
     showMenu();
}
 else if (Menu === "6") {
      prompt("exit programme")
}
   showMenu();
}

        
    
