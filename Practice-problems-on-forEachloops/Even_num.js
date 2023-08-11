const arr = ["123", "456", "789", "101", "2020", "505"];
let evenArr = [];
arr.forEach(function (arrVal) {
    if (arrVal % 2 == 0) {
        evenArr.push(arrVal)
    }
})
console.log(evenArr)