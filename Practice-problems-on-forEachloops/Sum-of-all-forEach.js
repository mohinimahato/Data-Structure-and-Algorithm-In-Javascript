var sum = function (arr) {
    var result = 0;
    arr.forEach(function (sumTotal) {
        result = sumTotal + result;
    }
    )
    return result;

}
var arr = [10, 20, 30, 40, 50];
console.log(sum(arr));