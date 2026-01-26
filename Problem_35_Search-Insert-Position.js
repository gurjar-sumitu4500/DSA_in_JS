var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let ans = nums.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] >= target) {
            high = mid - 1;
            ans = mid;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

console.log(searchInsert([1, 3, 5, 5, 5, 5, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));