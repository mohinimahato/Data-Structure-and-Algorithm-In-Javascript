const array = [2, 5, 10, 1, 0, 90, 22];
let minNum = array[0];
array.forEach(function (arr) {
    if (minNum > arr) {
        minNum = arr;
    }
})
console.log(`Minimun value in the given array is ${minNum}`)