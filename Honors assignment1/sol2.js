function isEven(number) {

    return number % 2 === 0 ? "even" : "odd";
    
    }
    
    
    const readline = require('readline').createInterface({
    
     input: process.stdin,
    
     output: process.stdout
    
    });
    
    
    readline.question("Enter a number: ", (number) => {
    
    number = parseInt(number);
    
    console.log(`The number${number} is ${isEven(number)}.`);
    
    readline.close();
    
    });