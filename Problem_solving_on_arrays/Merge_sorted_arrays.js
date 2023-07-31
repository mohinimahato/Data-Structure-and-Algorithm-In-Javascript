var merge = function (nums1, m, nums2, n) {
    let result = Array(m + n).fill(0);
    let i = 0; //iterate on numss1
    let j = 0; //iterate on numss2
    let k = 0; //iterate on result
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            result[k] = nums1[i];
            k++;
            i++;
        }
        else {
            result[k] = nums2[j];
            k++;
            j++;
        }
    }
    //The above while loop will end when any one array exhausts
    while (i < m) {
        //nums1 still got some elements left
        result[k] = nums1[i];
        k++;
        i++;
    }
    while (j < n) {
        //nums2 still got some elements left
        result[k] = nums2[j];
        k++;
        j++;
    }

    //because the question demands      
    for (let i = 0; i < result.length; i++) {
        nums1[i] = result[i];
    }
};