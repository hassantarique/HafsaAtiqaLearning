
    function isInputValidDepartment(input){
        const validDepartments= ["marketing","business","stockexchange"];
        if(validDepartments.includes(input)){
            return true;
        }
        else{
            return false;
        }

    }

    console.log(isInputValidDepartment("software"));