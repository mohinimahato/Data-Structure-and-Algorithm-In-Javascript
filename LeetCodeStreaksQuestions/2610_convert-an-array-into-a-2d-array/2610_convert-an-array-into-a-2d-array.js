
var findMatrix = function (nums) {
    const result = [];
    const freqOfNum = new Array(nums.length + 1).fill(0);

    for (const num of nums) {
        if (freqOfNum[num] >= result.length) {
            result.push([]);
        }
        result[freqOfNum[num]].push(num);
        freqOfNum[num]++;

    }

    return result;
};
let arr = [1, 2, 3, 4, 1, 6, 8, 1, 2];
console.log(findMatrix(arr));


