const mathFunctions = require('./math.js');

let a = 10;
let b = 5;
      
console.log(`Sum of ${a} and ${b} is: ${mathFunctions.add(a, b)}`);
console.log(`Difference of ${a} and ${b} is: ${mathFunctions.subtract(a, b)}`);
console.log(`Product of ${a} and ${b} is: ${mathFunctions.multiply(a, b)}`);    
console.log(`Division of ${a} by ${b} is: ${mathFunctions.divide(a, b)}`);