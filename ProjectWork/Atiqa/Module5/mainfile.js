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

//function input(){
   //while(true){
    //prompt("want to add amployee infromation yes/no:  ");
      //if (input === "yes") 
       

let totalEmployees = [];
showMenu();
     
while (true){
   let Menu = prompt("enter the desired Menu:");
   if (Menu === "1") {
      let employee = { };
      //let Menu = prompt("enter the desired Menu:");
      //input();
      
      // while(true) {
      //    let input =prompt("want to add amployee infromation yes/no:  ");
      //    if (input.toLowerCase() === "yes") {
      //       break;
      //    }
      //    else (input.toLowerCase()=== "no")
         while(true){
         let firstName = prompt("firstName:");
         
         if(!firstName) {
            console.error(`invalidfirstName and Re-enter the correct name`);
            continue;
         }

         
         else {
             employee.firstName = firstName;
             break }
         };
      
      
      

             
         

       while(true) {
       let lastName = prompt("lastName :");
         if(!lastName) {
            console.error(`invalidlastName Or Re-enter Correct Last Name`);
            continue;
         }

          
         else {
             employee.lastName = lastName;
            break }
         
       };
        while(true) {
         let Department = prompt ("Department :");
         if (!Department) {
            console.error(`invalid Department or type again`);
            continue;
         }
         else {
           employee.Department = Department;
            break;
          }
       };

        
      
                             
        while(true){
          let yearOfrawBirth = prompt ("employee Birth year(1-12):");
         let  yearOfBirth = Number(yearOfrawBirth);
         if(!Number.isInteger(yearOfBirth)){
           console.error("enter a valid year of Birth");
           continue;
          }
        if (yearOfBirth<1 || yearOfBirth>12){
           console.error(`enter year of birth between 1 and 12`);
           continue;
            }
         let monthOfrawBirth = prompt ("employee Birth month(1-12):");
         let  monthOfBirth = Number(monthOfrawBirth);
         if(!Number.isInteger(monthOfBirth)){
           console.error("enter a valid Month of Birth");
           continue;
          }
        if (monthOfBirth<1 || monthOfBirth>12){
           console.error(`enter month of birth between 1 and 12`);
           continue;
            }

        let dayOfrawBirth = prompt ("employee start Day(1-31):");
        let  dayOfBirth = Number(dayOfrawBirth);
        if(!Number.isInteger(dayOfBirth)){
           console.error("enter a valid start date Day");
           continue;
            }
        if (dayOfBirth<1 || dayOfBirth>31){
            console.error(`Date must be entered between 1 and 31`);
            continue;
            }
         
         employee.dateOfBirth =  new Date (yearOfBirth, monthOfBirth-1, dayOfBirth);
         break;
      }
         

          while(true) {
          let yearsOfEmploymenRawString = prompt ("years of employment:")

          let yearsOfEmployment = Number(yearsOfEmploymenRawString);

          if (typeof (yearsOfEmployment) == 'number'){
         employee.yearsOfEmployment = Number(yearsOfEmployment);
         break
          }
         // console.log("data of employee added successfully");
         // console.log("_________");
         // let input = prompt("if you want to add another employee press enter or press no to return to main menu")

         // if(!input){
         // continue;
         // }
         // if (input.toLowerCase()=== "no"){
         //    break
         // };
          
         else {
           console.error('invalid year of employment or type again');
         }
      }
      


       
      totalEmployees.push(employee);
       console.log("data of employee added successfully");
         console.log("_________");
      
      // let input = prompt ("enter another employee or no:  ")
      // if (!input || input.toLowerCase() === "no") 
      //    break; 

      
   
       
   }                                      
      
   else if(Menu === "2") {
      console.log(totalEmployees);
   }

   else if(Menu === "3") {
      let nameOfEmployee = prompt("search employee by name:");

      for (let index = 0; index < totalEmployees.length; index++) {
         if (totalEmployees[index].firstName == nameOfEmployee) {
            console.log(totalEmployees[index]);
         }
      }
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
      }
   }

   else if (Menu === "5") {
     totalEmployees = JSON.stringify(totalEmployees);
     console.log(totalEmployees);
   }
   else if (Menu === "6") {
      prompt("exit programme")
      break;
   }

   else
   {
      prompt("invalid entry -re-enter :");
   }
  
   console.log("You entered : " + Menu);
   showMenu();
}
