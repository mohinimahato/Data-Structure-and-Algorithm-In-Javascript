var findContentChildren = function (s, g) {
    s.sort((a, b) => (a - b));
    g.sort((a, b) => (a - b));
    let i = 0; let j = 0;
    let contentChild = 0;
    while (i < g.length && j < s.length) {
        if (s[j] <= g[i]) {
            contentChild++;
            i++
        }
        j++;
    }
    return contentChild;
}
var g = [1, 2, 3];
var s = [1, 1];
var result = findContentChildren(g, s);
console.log(result);  // Output: 1
