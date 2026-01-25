// var search = function (nums, target) {
//     let binarySearch = (arr, target, low, high) => {
//         if (low > high) return -1;
//         let mid = Math.floor((low + high) / 2);
//         if (target == arr[mid]) return mid;
//         else if (target < arr[mid]) return binarySearch(arr, target, low, mid - 1);
//         else return binarySearch(arr, target, mid + 1, high);
//     }
//     return binarySearch(nums, target, 0, nums.length - 1);
// }

var search = function (nums, target) {  // Iterative approach is much better as it takes less space than recursive
    let low = 0;
    let high = nums.length - 1;
    if (nums.length === 0) return -1;
    if (target < nums[low] || target > nums[high]) return -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target == nums[mid]) return mid;
        else if (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 3, 5, 9, 12], 13));