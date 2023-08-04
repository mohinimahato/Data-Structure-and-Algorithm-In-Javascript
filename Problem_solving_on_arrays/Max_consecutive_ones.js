var maxConsecutiveOnes = function (nums) {
    let consecutiveOnes = 0;
    let finalAns = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consecutiveOnes++;
        }
        else {
            finalAns = Math.max(finalAns, consecutiveOnes);
            consecutiveOnes = 0;
        }
    }
    return Math.max(finalAns, consecutiveOnes);
}
// console.log(maxConsecutiveOnes([1, 0, 0, 0, 1, 1, 1, 1, 1, 0]));
let nums = [1, 0, 1, 1, 0, 1];
console.log(maxConsecutiveOnes(nums));