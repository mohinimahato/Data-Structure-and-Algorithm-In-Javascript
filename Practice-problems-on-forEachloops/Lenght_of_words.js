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
let wordLenght = [];
stringsArray.forEach(function (words) {
    wordLenght.push(words.length);
})
console.log(wordLenght)