## Problem Statement:
Assume you are given an array g representing the greed factor of children and an array s representing the size of cookies. Your goal is to maximize the number of your content children and output the maximum number.

Each child i has a greed factor g[i], and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your task is to find the maximum number of content children.

## Solution:
To solve this problem, you can follow these steps:

- Sort the arrays g and s in ascending order.
- Initialize two pointers, one for g (let's call it i) and one for s (let's call it j), both starting from the beginning of their respective arrays.
- Iterate through both arrays, and for each child in g, try to find the smallest cookie in s that satisfies the greed factor.
- If a suitable cookie is found, increment both pointers (i and j) to move to the next child and cookie.
- If a suitable cookie is not found, only increment the pointer for cookies (j).
- Continue this process until you reach the end of either g or s