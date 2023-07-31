function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let arr = [9, 10, 11, 12, 80, 2];
let i = 0;
let j = arr.length - 1;
while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
}
console.log(arr);