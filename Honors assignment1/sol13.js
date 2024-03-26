const numbers = [1, 2, 3, 4, 5, 2, 4, 6, 7, 8, 1, 3, 9, 10];

const uniqueNumbers = numbers.reduce((unique, number) => {
    if (!unique.includes(number)) {
        unique.push(number);
    }
    return unique;
}, []);

console.log(uniqueNumbers);