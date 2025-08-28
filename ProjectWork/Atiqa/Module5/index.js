import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};
let firstName = prompt("firstName:");
if(!firstName){
    console.error(`invalidfirstName`);
    process.exit(1);
}
//employee.firstName =firstName;

let lastName = prompt("lastName:");
if(!lastName){
    console.error(`invalidlastName`);
    process.exit(1);
}
employee.lastName =lastName;

let startDateYear = prompt ("employee start year(1993-2023):");
startDateYear = Number(startDateYear);
if(!Number.isInteger(startDateYear)){
    console.error("enter a valid start date year");
    process.exit(1);
}
if (startDateYear<1990 || startDateYear>2023){
    console.error(`Ankhain khol k enter karain`);
    process.exit(1);
}


let startDateMonth = prompt ("employee start Month(1-12):");
startDateMonth = Number(startDateMonth);
if(!Number.isInteger(startDateMonth)){
    console.error("enter a valid start date Month");
    process.exit(1);
}
if (startDateMonth<1 || startDateMonth>12){
    console.error(`again Ankhain khol k enter karain`);
    process.exit(1);
}

let startDateDay = prompt ("employee start Day(1-31):");
startDateDay = Number(startDateDay);
if(!Number.isInteger(startDateDay)){
    console.error("enter a valid start date Day");
    process.exit(1);
}
if (startDateDay<1 || startDateDay>31){
    console.error(`Maheenay may 31 din hotay hain bus`);
    process.exit(1);
}
//employee.startDate = new Date (`${startDateYear}-${startDateMonth}-${startDateDay}`);
employee.startDate =new Date (startDateYear,startDateMonth-1,startDateDay);

//let isActive = prompt ("is employee active(yes or no):")

const json = JSON.stringify(employee,null,2);
console.log(json);



