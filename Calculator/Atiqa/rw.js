
        let number1 = 6;
        let number2= 2;

        let operator= [];
		let plus = "+";
        let minus = "-";
        let multiply ="*";
        let divide = "/";
		(operator.push(plus));
        (operator.push(minus));
        (operator.push(multiply));
        (operator.push(divide));

         function calculator(){
            for (i=0 ; i < 3; i++){
                 if (operator === "+"){
                     number1 = (number1+number2)
                }

                 console.log(number1);
            }
         }
        

		//console.log(operator);