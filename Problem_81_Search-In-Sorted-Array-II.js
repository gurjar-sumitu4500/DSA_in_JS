var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target == nums[mid]) {
            return true;
        }
        //this is necessary to discard the ambiguity (cannot check if a portion is sorted or not)
        //so once we have done checking if mid is not target then we can safely remove the low and high till we get a clear list which
        //can tell us if it's sorted or not
        //!!! It's worst case is that it loses the guaranteed log n time complexity
        if (nums[low] == nums[mid] && nums[mid] == nums[high]) {
            low++;
            high--;
            continue;
        }
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([2, 5, 6, 0, 0, 1, 2], 2));
console.log(search([2, 2, 2, 3, 3, 3], 3));
console.log(search([0, 1], 0));
console.log(search([0, 1], 1));
console.log(search([1, 0, 1, 1, 1], 0))        //Edge case