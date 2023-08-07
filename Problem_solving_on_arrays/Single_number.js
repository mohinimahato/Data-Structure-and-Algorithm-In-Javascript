var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result
};
let nums = [1, 0, 1, 1, 5, 1];
console.log(singleNumber(nums));