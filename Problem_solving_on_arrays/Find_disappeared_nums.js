var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]);
        let idx = x - 1;
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};
let arr = [1, 5, 3, 5, 6, 3, 5, 2, 4];
console.log(findDisappearedNumbers(arr));