import createprompt from "prompt-sync";

let prompt = createprompt();

import employees from './data.json' assert {type:'json'};

console.log(employees);