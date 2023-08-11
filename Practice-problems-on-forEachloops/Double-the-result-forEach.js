var doubleResult = function (nums) {
    let result = [];
    nums.forEach(function (num) {
        result.push(num * 2)
        // console.log(num);

    }
    )
    return result;
}
let nums = [1, 5, 3, 5, 6, 3, 5, 2, 4];
console.log(doubleResult(nums));