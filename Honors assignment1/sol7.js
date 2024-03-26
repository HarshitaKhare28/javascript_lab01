const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (n) => {
    number = parseInt(n);
    for (let i = 1; i <= n; i++) {
        let result = 8 ** i;
        console.log(`8 raised to the power of ${i} is ${result}`);
    }
    readline.close();
});