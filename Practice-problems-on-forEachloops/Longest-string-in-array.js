const stringsArray = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon"
];
let longestStr = "";
stringsArray.forEach(function (str) {
    if (str.length > longestStr.length) {
        longestStr = str
    }
})
console.log(`The longest string in the given array is ${longestStr}`)