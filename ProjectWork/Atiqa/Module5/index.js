
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let totalEmployees = [];
 while(true){let employee = {}
 let firstName = prompt("firstName(Or type no):");
  if(!firstName){
  console.error(`invalidfirstName and Re-enter the correct name`);
  continue;
  }
  if (firstName.toLowerCase() === "no" ){
    break;
  }

  employee.firstName = firstName;

  while(true){
    let lastName = prompt("lastName (or type no):");
          if(!lastName){
          console.error(`invalidlastName Or Re-enter Correct Last Name`);
          continue;
          }
          if (lastName.toLowerCase() === "no"){
          break;
          }
        
      
          employee.lastName =lastName;

  while(true){
    let Department = prompt ("Department (or type no):");
        if (!Department){
        console.error(`invalid Department or type again`);
        continue;
        }
         if (Department.toLowerCase() === "no"){
        break;
        }



//  let monthOfBirth = prompt ("employee Birth Month(1-12):");
//  monthOfBirth = Number(monthOfBirth);
//  if(!Number.isInteger(monthOfBirth)){
//     console.error("enter a valid Month of Birth");
//     process.exit(1);
//    }
//  if (monthOfBirth<1 || monthOfBirth>12){
//      console.error(`enter month of birth between 1 and 12`);
//      process.exit(1);
//      }

//  let dayOfBirth = prompt ("employee start Day(1-31):");
//   dayOfBirth = Number(dayOfBirth);
//  if(!Number.isInteger(dayOfBirth)){
//      console.error("enter a valid start date Day");
//      process.exit(1);
//      }
//  if (dayOfBirth<1 || dayOfBirth>31){
//      console.error(`Date must be entered between 1 and 31`);
//      process.exit(1);
//      }
      
//  employee.dateOfBirth =  new Date (yearOfBirth, monthOfBirth-1, dayOfBirth);

    while(true){
            let yearsOfEmployment = prompt ("years of employment(or no):")
             if (yearsOfEmployment.toLowerCase()==="no"){
            break;
             }

            yearsOfEmployment=Number(yearsOfEmployment);
            if(!Number.isInteger(yearsOfEmployment)){
            console.error('invalid year of employment or type again');
            continue;

            }

     employee.yearsOfEmployment = yearsOfEmployment;
     break;
    }
        
     employee.Department = Department;
     break;
     }

     employee.lastName =lastName;
     break;
    }
  
    totalEmployees.push(employee);

   //const json = JSON.stringify(employee,null,2);
   //console.log(json);
   
 
   //console.log(totalEmployees);
  }
   

// // //let isActive =abc
// //  prompt ("is employee active(yes or no):")
// totalEmployees.push(employee);
// //console.log(totalEmployees);

