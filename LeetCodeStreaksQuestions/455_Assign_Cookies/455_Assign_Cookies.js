var assignCookies = function (g, s) {
    //s -> size of cookie, g->greed factor
    // sorting in ascending order
    s.sort((a, b) => a - b);
    g.sort((a, b) => a - b);
    // initializing two pointers for both the arrays, i pointing toward g and j pointing toward s
    let i = 0, j = 0;
    let contentChild = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            contentChild++;
            i++
        }
        j++;
    }
    return contentChild;
}
let arr1 = [1, 2, 3];
let arr2 = [1, 1];
console.log(assignCookies(arr1, arr2)); 