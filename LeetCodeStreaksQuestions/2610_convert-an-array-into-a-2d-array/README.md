## Problem Statement: 2610(Medium)
Convert an Array into a 2D array with conditions
You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

- The 2D array should contain only the elements of the array nums.
- Each row in the 2D array contains distinct integers.
- The number of rows in the 2D array should be minimal.
- Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.
#### Input
nums = [1,3,4,1,2,3,1]
#### Output
[[1,3,4,2],[1,3],[1]]

## Solution:

- frequency map is initialized with a size of nums.size() + 1 to accommodate indexing from 0 to nums.size().
- For each integer num in the nums array:
    - If the frequency of integer num (frequency[num]) is equal to or greater than the size of result, it means we need to add a new empty subarray to the result.
    - The integer num is then added to the subarray in result corresponding to its current frequency (frequency[num]).
- Finally, the frequency of integer num is incremented.
Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

