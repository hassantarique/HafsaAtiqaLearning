import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee={};
let firstName= prompt ("first Name:");
if (!firstName){
    console.error("invalid first name");
    ProcessingInstruction.exit(1);
}