const strings = [
    "kiwi",
    "orange",
    "apple",
    "mango",
    "grapes",
    "watermelon",
    "muskmelon",
    "pineapple",
    "banana",
    "litchi"
];

function findLongestString(arr) {
    let longestString = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}
console.log(findLongestString(strings));