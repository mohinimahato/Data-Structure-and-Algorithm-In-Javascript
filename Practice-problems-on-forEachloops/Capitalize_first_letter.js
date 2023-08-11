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

const capitalizedWords = [];

stringsArray.forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
});

console.log(capitalizedWords);