## Problem Statement:
Assume you are given an array g representing the greed factor of children and an array s representing the size of cookies. Your goal is to maximize the number of your content children and output the maximum number.

Each child i has a greed factor g[i], and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your task is to find the maximum number of content children.

-----
1. Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.

2. Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
----
## Solution:
To solve this problem, you can follow these steps:

- Sort the arrays g and s in ascending order.
- Initialize two pointers, one for g (let's call it i) and one for s (let's call it j), both starting from the beginning of their respective arrays.
- Iterate through both arrays, and for each child in g, try to find the smallest cookie in s that satisfies the greed factor.
- If a suitable cookie is found, increment both pointers (i and j) to move to the next child and cookie.
- If a suitable cookie is not found, only increment the pointer for cookies (j).
- Continue this process until you reach the end of either g or s