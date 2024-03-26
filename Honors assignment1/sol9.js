const readline = require('readline');
const cities = ["Kalyan", "Nagpur", "Mumbai", "Delhi"];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.question("Enter a city name: ", function (cityName) {
    const index = cities.indexOf(cityName);
    if (index !== -1) {
        console.log(`Index: ${index}`);
    } else {
        console.log("Not Found");
    }
    rl.close();
});