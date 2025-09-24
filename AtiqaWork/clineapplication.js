import createprompt from "prompt-sync";
let prompt = createprompt();

import employees from "./data.json" with{type:"json"};for (let employee of employees) {


const logEmployee =(employee)=>{
    Object.entries(employee).forEach(entry =>{
        console.log(`${entry[0]}: ${entry[1]}`);

    })
}



function GetInput(PromptText, Validator,Transformer){
    let value = prompt(PromptText);
    if(Validator && !Validator(value)){
        console.error("___invalid input___");
        return GetInput(PromptText, Validator, Transformer);
    }
    if (Transformer){
        return Transformer(value);
    }
    return value;

}

const isStringInputValid = function (input){
   return (input) ? true :false;
}

const isBooleanInputValid = function(input){
    return(input ==="yes" || input ==="no")
}

const isStartYearInputValid =function(){
    NumValue = Number(input);
    if(Number.isInteger(NumValue) && NumValue >1980 && NumValue<2025){
        return true;
    }
    return false;
}

const isStartMonthInputValid = function(input){
    NumValue = Number(input);
    if(Number.isInteger(NumValue) && NumValue >1 && NumValue<12){
        return true;
    }
    return false;
}
const isStartDayInputValid = function(input){
    NumValue =Number(input);
    if(Number.isInteger(NumValue) && NumValue>1 && NumValue<31){
        return true;
    }
    return false;
}

const transformerToBoolean = (input) => {
    return (input === "yes") ? true : false;
}
function listEmployees(){
console.log(`Employee ist ----------------------`);
console.log("");

employees.forEach(e=>{
    logEmployee(e);
    prompt(`press enter to continue`);
})

console.log("employee list end");

};

function AddEmployee(){
    console.log(`Add Employees------------------------`);
        console.log("");
        let employee = {};

        employee.firstName = GetInput("First Name: ", isStringInputValid);
        employee.LastName = GetInput("Last Name: ", isStringInputValid);
        employee.Department = GetInput("Department: ", isStringInputValid);

        let startDateYear = GetInput("Enter the year from 1980-2025: ", isStartYearInputValid);
        let startDateMonth = GetInput("Enter the Month from 1-12: ", isStartMonthInputValid);
        let startDate = GetInput("Enter the date from 1-31: ", isStartDayInputValid);
        employee.StartDateOfWorking = new Date(startDateYear, startDateMonth - 1, startDate);
        employee.isActive = prompt("IsEmployeeActive: yes or no: ", isBooleanInputValid, transformerToBoolean);
      

        const json = JSON.stringify(employee, null, 2);
        console.log(`employee : ${json}`);
    
}

let result;
function searchbyId(){
    const Id = GetInput("Enter Employee Id to search; ", null, Number);
    result = employees.find(e=> e.id === Id);
if(result){
    console.log("Employee found")
    logEmployee(result);
}else{
    console.log(`Employee with id ${Id} not found`);
};
};

function searchByName(){
    const firstNameSearch =GetInput("Enter Employee Name to search: ").toLowerCase();
    const lastNameSearch = GetInput("Enter Employee Last Name to search: ").toLowerCase();
         result =employees.filter(e=>{
            if(firstNameSearch && e.firstName.toLowerCase().includes(firstNameSearch)){
                return true;
            }
            if(lastNameSearch && e.lastName.toLowerCase().includes(lastNameSearch)){
                return true;
            }
        else{
            return false;
        }
    });
};
result.forEach((e,idx)=>{
    console.log(`Result ${idx +1}`);
    logEmployee(e);
    prompt("Press enter to continue");
});


const command = process.argv[3].toLowerCase()

switch (command) {
    case "list":
       listEmployees();
       break;

    case "add":
        AddEmployee();
        break;
    
    case "search-by-id":
        searchbyId();
        break;
    case "search-by-name":
        searchByName();
        break;

    default:
        console.log(`Unsupported command. exiting ---------`);
        process.exit(1);


}


}
